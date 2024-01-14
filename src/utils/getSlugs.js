import fs from 'fs';
import path from 'path';

function getSlugs(...paths) {
  const files = fs.readdirSync(path.resolve(...paths));
  // remove .md
  const slugs = files.map((file) => file.slice(0, -3));
  return slugs;
}

export function getProjectSlugs() {
  return getSlugs('_posts', 'project');
}

