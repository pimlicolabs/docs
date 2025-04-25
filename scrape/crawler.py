#!/usr/bin/env python
"""
Web crawler for https://docs.pimlico.io/ that extracts all URLs and saves them to a text file.
"""

import requests
from bs4 import BeautifulSoup
import urllib.parse
from urllib.robotparser import RobotFileParser
import time
import re
from collections import deque
import os

class WebCrawler:
    def __init__(self, base_url):
        self.base_url = base_url
        self.domain = urllib.parse.urlparse(base_url).netloc
        self.visited_urls = set()
        self.queue = deque([base_url])
        self.all_urls = []
        self.robot_parser = RobotFileParser()
        self.robot_parser.set_url(urllib.parse.urljoin(base_url, '/robots.txt'))
        try:
            self.robot_parser.read()
        except Exception as e:
            print(f"Warning: Could not read robots.txt: {e}")
        
        # Create output directory if it doesn't exist
        os.makedirs('output', exist_ok=True)
    
    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the same domain."""
        parsed_url = urllib.parse.urlparse(url)
        return (
            bool(parsed_url.netloc) and
            parsed_url.netloc == self.domain and
            parsed_url.scheme in ('http', 'https')
        )
    
    def can_fetch(self, url):
        """Check if the URL can be fetched according to robots.txt."""
        try:
            return self.robot_parser.can_fetch('*', url)
        except Exception:
            # If there's an error checking robots.txt, assume it's allowed
            return True
    
    def normalize_url(self, url):
        """Normalize URL by removing fragments and trailing slashes."""
        # Remove fragment
        url = urllib.parse.urldefrag(url)[0]
        # Remove trailing slash if present
        if url.endswith('/') and url != self.base_url:
            url = url[:-1]
        return url
    
    def extract_urls(self, html, current_url):
        """Extract all URLs from HTML content."""
        soup = BeautifulSoup(html, 'html.parser')
        urls = []
        
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            
            # Skip empty links, javascript, and mailto links
            if not href or href.startswith(('javascript:', 'mailto:', 'tel:', '#')):
                continue
            
            # Convert relative URLs to absolute
            if not href.startswith(('http://', 'https://')):
                href = urllib.parse.urljoin(current_url, href)
            
            # Normalize URL
            href = self.normalize_url(href)
            
            if self.is_valid_url(href):
                urls.append(href)
        
        return urls
    
    def crawl(self, max_pages=None, delay=1):
        """Start crawling from the base URL."""
        count = 0
        
        while self.queue and (max_pages is None or count < max_pages):
            url = self.queue.popleft()
            
            # Skip if already visited or not allowed by robots.txt
            if url in self.visited_urls or not self.can_fetch(url):
                continue
            
            try:
                print(f"Crawling: {url}")
                response = requests.get(url, timeout=10)
                
                if response.status_code == 200:
                    self.visited_urls.add(url)
                    self.all_urls.append(url)
                    count += 1
                    
                    # Extract and queue new URLs
                    new_urls = self.extract_urls(response.text, url)
                    for new_url in new_urls:
                        if new_url not in self.visited_urls and new_url not in self.queue:
                            self.queue.append(new_url)
                
                # Respect robots.txt and be nice to the server
                time.sleep(delay)
                
            except Exception as e:
                print(f"Error crawling {url}: {e}")
        
        print(f"Crawling completed. Found {len(self.all_urls)} unique URLs.")
    
    def save_urls_to_file(self, filename='output/pimlico_urls.txt'):
        """Save all crawled URLs to a text file."""
        with open(filename, 'w') as f:
            for url in sorted(self.all_urls):
                f.write(f"{url}\n")
        
        print(f"URLs saved to {filename}")

def main():
    base_url = 'https://docs.pimlico.io/'
    crawler = WebCrawler(base_url)
    
    # Crawl with a maximum of 500 pages (adjust as needed)
    # and a 1-second delay between requests
    crawler.crawl(max_pages=500, delay=1)
    
    # Save URLs to file
    crawler.save_urls_to_file()

if __name__ == '__main__':
    main()
