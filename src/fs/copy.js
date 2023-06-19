import { cp } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    const source = path.join(__dirname, './files');
    const destination = path.join(__dirname, './files_copy');

    try {
        await cp(source, destination, { recursive: true, force: false, errorOnExist: true });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
