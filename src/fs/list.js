import { readdir } from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    try {
        const pathToDir = path.join(__dirname, './files');
        const files = await readdir(pathToDir);

        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();