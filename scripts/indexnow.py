#!/usr/bin/env python3
"""Submit pages changed by a production deploy to IndexNow (Bing, Yandex, Seznam, Naver...).

Usage: indexnow.py <site-type: docs|www> <host> <base-sha> <head-sha>
Reads the key from public/<key>.txt (the only 32-hex .txt file there).
Only URLs present in the live sitemap are submitted.
"""
import json, os, re, subprocess, sys, urllib.request, glob

site, host, base, head = sys.argv[1:5]

def key():
    for f in glob.glob("public/*.txt"):
        name = os.path.basename(f)[:-4]
        if re.fullmatch(r"[0-9a-f]{32}", name):
            return name
    sys.exit("no IndexNow key file in public/")

def changed_files():
    out = subprocess.run(["git", "diff", "--name-only", "--diff-filter=AMR", f"{base}..{head}"],
                         capture_output=True, text=True, check=True).stdout
    return [l for l in out.splitlines() if l]

def to_path(f):
    if site == "docs":
        m = re.fullmatch(r"docs/pages/(.+)\.mdx?", f)
        if not m: return None
        p = re.sub(r"(^|/)index$", "", m.group(1))
        return "/" + p
    m = re.fullmatch(r"app/(.*?)/?page\.tsx", f)
    if m: return "/" + m.group(1)
    m = re.fullmatch(r"content/case-studies/(.+)\.md", f)
    if m: return "/case-studies/" + m.group(1)
    return None

def sitemap_urls():
    with urllib.request.urlopen(f"https://{host}/sitemap.xml", timeout=30) as r:
        return set(re.findall(r"<loc>([^<]+)</loc>", r.read().decode()))

def norm(u): return u.rstrip("/") or u

live = {norm(u) for u in sitemap_urls()}
urls = sorted({norm(f"https://{host}{p}") for p in filter(None, map(to_path, changed_files()))} & live)
if not urls:
    print("no changed pages in the sitemap; nothing to submit"); sys.exit(0)
k = key()
if os.environ.get("INDEXNOW_DRY_RUN"):
    print("dry run:", *urls, sep="\n  "); sys.exit(0)
body = json.dumps({"host": host, "key": k, "keyLocation": f"https://{host}/{k}.txt", "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", body, {"Content-Type": "application/json; charset=utf-8"})
with urllib.request.urlopen(req, timeout=30) as r:
    print(f"IndexNow {r.status}: submitted {len(urls)} URL(s)")
    for u in urls: print("  ", u)
