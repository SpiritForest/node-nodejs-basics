import { writeFile, stat } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    const pathToFile = path.join(__dirname, './files/fresh.txt');
    
    try {
        await writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();