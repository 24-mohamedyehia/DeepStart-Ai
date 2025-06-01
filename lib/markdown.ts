import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface RoadmapFrontmatter {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  slug: string;
}

export interface Roadmap extends RoadmapFrontmatter {
  content: string;
}

export async function getRoadmapBySlug(slug: string): Promise<Roadmap | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      title: data.title || '',
      description: data.description || '',
      duration: data.duration || '',
      difficulty: data.difficulty || '',
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error loading roadmap for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllRoadmaps(): Promise<RoadmapFrontmatter[]> {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    const roadmaps = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const filePath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          title: data.title || '',
          description: data.description || '',
          duration: data.duration || '',
          difficulty: data.difficulty || '',
          slug,
        };
      });
    
    return roadmaps;
  } catch (error) {
    console.error('Error loading roadmaps:', error);
    return [];
  }
}