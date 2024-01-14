import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';
import { preprocessMarkdownData } from './preprocessMarkdownData';

function getMarkdownData(...paths) {
  const markdown = fs.readFileSync(path.join(...paths), 'utf-8');

  const { attributes, body } = frontmatter(markdown);
  attributes.slug = paths?.at(-1)?.split('.')?.at(0);
  attributes.date = attributes?.date?.toISOString() || '';

  const cleanBody = preprocessMarkdownData(body);

  return { meta: attributes, body: cleanBody };
}

export function getProjectData(slug) {
  return getMarkdownData('_posts', 'project', slug + '.md');
}
