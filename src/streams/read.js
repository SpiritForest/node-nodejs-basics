import { createReadStream } from 'fs';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const pathToFile = path.join(__dirname, './files/fileToRead.txt');

    createReadStream(pathToFile).pipe(process.stdout);
};

await read();