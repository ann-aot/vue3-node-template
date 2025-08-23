import fs from 'fs';
import path from 'path';

// Source and destination paths
const src = path.join(__dirname, '../src/openapi.yaml');
const dest = path.join(__dirname, '../dist/openapi.yaml');

// Ensure dist folder exists
fs.mkdirSync(path.dirname(dest), { recursive: true });

// Copy the file
fs.copyFileSync(src, dest);

console.log('openapi.yaml copied successfully!');
