# Pimlico Documentation Crawler

A simple web crawler that extracts all URLs from the Pimlico documentation website (https://docs.pimlico.io/) and saves them to a text file.

## Features

- Crawls all pages within the docs.pimlico.io domain
- Respects robots.txt rules
- Normalizes URLs to avoid duplicates
- Implements polite crawling with configurable delay between requests
- Saves all discovered URLs to a text file

## Requirements

- Python 3.10+
- requests
- beautifulsoup4

## Setup

1. Create a virtual environment (already done):
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   ```
   source venv/bin/activate  # On macOS/Linux
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

Run the crawler with:

```
python crawler.py
```

The script will:
1. Start crawling from https://docs.pimlico.io/
2. Follow links within the same domain
3. Save all discovered URLs to `output/pimlico_urls.txt`

## Configuration

You can modify the following parameters in the `main()` function:
- `max_pages`: Maximum number of pages to crawl (default: 500)
- `delay`: Time to wait between requests in seconds (default: 1)

## Output

The crawler will create an `output` directory and save all discovered URLs to `output/pimlico_urls.txt`.
