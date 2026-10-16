import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const notFoundPath = path.join(distDir, '404.html');

if (fs.existsSync(notFoundPath)) {
  console.log('✓ SPA 404 handler verified in dist/404.html');
}
