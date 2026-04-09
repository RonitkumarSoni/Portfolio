import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('.next') && !file.includes('node_modules')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');
files.push('./README.md');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/Mahir Patel/g, 'Ronit Soni');
  newContent = newContent.replace(/Mahir/g, 'Ronit');
  newContent = newContent.replace(/mahirpatel2005/ig, 'RonitkumarSoni');
  newContent = newContent.replace(/mahir\.patel\.cg@gmail\.com/g, 'ronitkumarsoni.cg@gmail.com');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
});
