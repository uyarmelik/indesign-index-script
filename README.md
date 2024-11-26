# InDesign Index Script
This script searches for specific words in an Adobe InDesign document and creates an index. It also saves any missing words into a separate file.

## Features
- **Word Search & Indexing:** Searches for words listed in the `words.txt` file within the active InDesign document.
- **Index Creation:** Adds an index for the found words.
- **Missing Words:** Saves any words not found into a `not_found.txt` file.

## Usage
1. **Place the Files:** Place a `words.txt` file in the same folder as your InDesign document. This file should contain the words you want to index, listed line by line.
2. **Run the Script:** Open your InDesign document and run the script. It will search for each word in the `words.txt` file and create an index.
3. **Results:** After the indexing process is completed, the found words are added as an index in the InDesign document. The words that could not be found are saved in the `not_found.txt` file.

## Example Usage
1. Contents of the `words.txt` file:
   ```
   Word1
   Word2
   Word3
   ```
2. When the script is executed, it will search for these words in the InDesign document and create an index. If some words are not found, they will be saved in the `not_found.txt` file.

## Warnings
- Ensure that the `words.txt` file is placed in the same folder as the InDesign document.
- The `not_found.txt` file will only be created if there are words that were not found.