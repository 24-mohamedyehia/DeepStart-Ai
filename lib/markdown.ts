import fs from 'fs';
import path from 'path';

// Function to read markdown files from the content directory
export async function getMarkdownContent(filename: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${filename}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading markdown file: ${filename}.md`, error);
    return null;
  }
}

// Function to get all available markdown files
export async function getAllMarkdownFiles() {
  try {
    const contentDir = path.join(process.cwd(), 'content');
    const files = fs.readdirSync(contentDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        id: file.replace('.md', ''),
        path: path.join(contentDir, file)
      }));
  } catch (error) {
    console.error('Error reading content directory', error);
    return [];
  }
}
