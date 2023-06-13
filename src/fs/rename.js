import { rename as renameFile } from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    const oldPath = path.join(__dirname, './files/wrongFilename.txt');
    const newPath = path.join(__dirname, './files/properFilename.md');

    try {
        await renameFile(oldPath, newPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();