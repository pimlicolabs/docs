#!/usr/bin/env python
"""
Script to check URLs from a list, replacing the domain and checking for 404 errors.
"""

import requests
import urllib.parse
import time
import concurrent.futures
from tqdm import tqdm

# Configuration
INPUT_FILE = 'output/pimlico_urls.txt'
OUTPUT_FILE = 'output/404_urls.txt'
OLD_DOMAIN = 'docs.pimlico.io'
NEW_DOMAIN = 'docs-git-revamp-pimlico.vercel.app'
MAX_WORKERS = 5  # Number of concurrent requests
REQUEST_TIMEOUT = 10  # Timeout in seconds
DELAY_BETWEEN_REQUESTS = 0.5  # Delay in seconds to be respectful

def replace_domain(url, old_domain, new_domain):
    """Replace the domain in a URL."""
    parsed = urllib.parse.urlparse(url)
    if parsed.netloc == old_domain:
        # Create a new URL with the new domain
        new_url = parsed._replace(netloc=new_domain).geturl()
        return new_url
    return url

def check_url(url):
    """Check if a URL returns a 404 status code."""
    try:
        response = requests.head(url, timeout=REQUEST_TIMEOUT, allow_redirects=True)
        
        # If head request fails, try a get request
        if response.status_code >= 400:
            response = requests.get(url, timeout=REQUEST_TIMEOUT)
            
        return url, response.status_code
    except Exception as e:
        # Return error for any exception (connection error, timeout, etc.)
        return url, f"Error: {str(e)}"

def main():
    # Read URLs from file
    with open(INPUT_FILE, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]
    
    print(f"Found {len(urls)} URLs to check")
    
    # Replace domains
    new_urls = [replace_domain(url, OLD_DOMAIN, NEW_DOMAIN) for url in urls]
    
    # List to store URLs with 404 errors
    not_found_urls = []
    
    # Check URLs with a thread pool to speed things up
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        # Submit all URL checks to the thread pool
        future_to_url = {executor.submit(check_url, url): url for url in new_urls}
        
        # Process results as they complete
        for future in tqdm(concurrent.futures.as_completed(future_to_url), total=len(new_urls), desc="Checking URLs"):
            url = future_to_url[future]
            try:
                checked_url, status = future.result()
                
                # Check if it's a 404 or other error
                if status == 404 or isinstance(status, str) and "Error" in status:
                    original_url = urls[new_urls.index(url)]
                    not_found_urls.append((original_url, checked_url, status))
                    print(f"404/Error: {checked_url} - {status}")
                
                # Add a small delay to be respectful to the server
                time.sleep(DELAY_BETWEEN_REQUESTS)
                
            except Exception as e:
                print(f"Error processing {url}: {e}")
    
    # Save 404 URLs to file
    with open(OUTPUT_FILE, 'w') as f:
        f.write("Original URL | New URL | Status\n")
        f.write("-" * 80 + "\n")
        for original_url, new_url, status in not_found_urls:
            f.write(f"{original_url} | {new_url} | {status}\n")
    
    # Print summary
    print(f"\nChecking complete. Found {len(not_found_urls)} URLs with 404 errors or connection issues.")
    print(f"Results saved to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()
