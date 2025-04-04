import fs from 'fs';
import archiver from 'archiver';
import path from 'path';

const output = fs.createWriteStream(path.join(__dirname, 'backend.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Archived backend folder: ${archive.pointer()} total bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(path.join(__dirname, 'backend'), 'backend');
archive.finalize();
