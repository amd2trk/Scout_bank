#!/usr/bin/env python3
import sys
import os
from bs4 import BeautifulSoup

def extract_to_text(html_file_path):
    if not os.path.exists(html_file_path):
        print(f"Error: File '{html_file_path}' not found.")
        sys.exit(1)

    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    lines = []

    # --- 1. TITLE ---
    title_tag = soup.select_one('.main-content h2.title')
    if title_tag:
        title_text = title_tag.get_text(strip=True)
        lines.append(title_text)
        lines.append("=" * len(title_text)) # Add an underline
        lines.append("") # Empty line

    # --- 2. CATEGORIES ---
    category_list = soup.select('.main-content header ul li')
    if category_list:
        cats = [li.get_text(strip=True) for li in category_list]
        lines.append("Tags: " + " | ".join(cats))
        lines.append("-" * 40)
        lines.append("")

    # --- 3. MAIN CONTENT (Paragraphs & Steps) ---
    main_text_div = soup.select_one('.main-text')
    if main_text_div:
        for child in main_text_div.children:
            if child.name == 'p':
                text = child.get_text(strip=True)
                if text:
                    lines.append(text)
                    lines.append("") # Empty line for spacing
            
            elif child.name == 'h6':
                # Section Header (e.g., "How to Tie")
                header = child.get_text(strip=True)
                lines.append(f"\n[{header}]")
                lines.append("-" * len(header))

            elif child.name == 'ol':
                # Numbered Lists
                steps = child.find_all('li')
                for i, step in enumerate(steps, 1):
                    lines.append(f"{i}. {step.get_text(strip=True)}")
                lines.append("")

    # --- 4. LINKS & RESOURCES ---
    lines.append("\n" + "=" * 20)
    lines.append("RESOURCES")
    lines.append("=" * 20)

    # Video Link
    iframe = soup.select_one('.responsive-iframe iframe')
    if iframe:
        lines.append(f"Video URL: {iframe.get('src')}")

    # Related Links
    footer_links = soup.select('footer ul li a')
    for link in footer_links:
        lines.append(f"Link: {link.get_text(strip=True)} -> {link.get('href')}")

    return "\n".join(lines)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python html2txt.py <filename.html>")
        sys.exit(1)

    input_file = sys.argv[1]
    
    # Generate content
    text_content = extract_to_text(input_file)

    # Determine output filename (change .html to .txt)
    output_filename = os.path.splitext(input_file)[0] + ".txt"

    # Save to file
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(text_content)

    print(f"Success! Extracted content saved to: {output_filename}")#!/usr/bin/env python3
import sys
import os
from bs4 import BeautifulSoup

def extract_to_text(html_file_path):
    if not os.path.exists(html_file_path):
        print(f"Error: File '{html_file_path}' not found.")
        sys.exit(1)

    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    lines = []

    # --- 1. TITLE ---
    title_tag = soup.select_one('.main-content h2.title')
    if title_tag:
        title_text = title_tag.get_text(strip=True)
        lines.append(title_text)
        lines.append("=" * len(title_text)) # Add an underline
        lines.append("") # Empty line

    # --- 2. CATEGORIES ---
    category_list = soup.select('.main-content header ul li')
    if category_list:
        cats = [li.get_text(strip=True) for li in category_list]
        lines.append("Tags: " + " | ".join(cats))
        lines.append("-" * 40)
        lines.append("")

    # --- 3. MAIN CONTENT (Paragraphs & Steps) ---
    main_text_div = soup.select_one('.main-text')
    if main_text_div:
        for child in main_text_div.children:
            if child.name == 'p':
                text = child.get_text(strip=True)
                if text:
                    lines.append(text)
                    lines.append("") # Empty line for spacing
            
            elif child.name == 'h6':
                # Section Header (e.g., "How to Tie")
                header = child.get_text(strip=True)
                lines.append(f"\n[{header}]")
                lines.append("-" * len(header))

            elif child.name == 'ol':
                # Numbered Lists
                steps = child.find_all('li')
                for i, step in enumerate(steps, 1):
                    lines.append(f"{i}. {step.get_text(strip=True)}")
                lines.append("")

    # --- 4. LINKS & RESOURCES ---
    lines.append("\n" + "=" * 20)
    lines.append("RESOURCES")
    lines.append("=" * 20)

    # Video Link
    iframe = soup.select_one('.responsive-iframe iframe')
    if iframe:
        lines.append(f"Video URL: {iframe.get('src')}")

    # Related Links
    footer_links = soup.select('footer ul li a')
    for link in footer_links:
        lines.append(f"Link: {link.get_text(strip=True)} -> {link.get('href')}")

    return "\n".join(lines)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python html2txt.py <filename.html>")
        sys.exit(1)

    input_file = sys.argv[1]
    
    # Generate content
    text_content = extract_to_text(input_file)

    # Determine output filename (change .html to .txt)
    output_filename = os.path.splitext(input_file)[0] + ".txt"

    # Save to file
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(text_content)

    print(f"Success! Extracted content saved to: {output_filename}")