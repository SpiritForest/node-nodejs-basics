import { rm } from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const pathToFile = path.join(__dirname, './files/fileToRemove.txt');

    try {
        await rm(pathToFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();