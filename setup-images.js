const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/favicon',
  'public/images/Gallery',
  'public/images/Logos'
];

console.log('Creating folder structure for images...');

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created: ${dir}`);
  } else {
    console.log(`Exists: ${dir}`);
  }
});

console.log('✅ Image folder structure ready! Drag and drop your files now.');
