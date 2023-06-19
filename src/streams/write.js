import { createWriteStream } from 'fs';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    const pathToFile = path.join(__dirname, './files/fileToWrite.txt');

    process.stdin.pipe(createWriteStream(pathToFile, { encoding: 'utf8', flags: 'a+' }));
};

await write();