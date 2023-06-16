import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createWriteStream, createReadStream } from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
    const gzip = createGzip();
    const pathToSourceFile = path.join(__dirname, './files/fileToCompress.txt');
    const pathToTargetFile = path.join(__dirname, './files/archive.gz');
    const readStream = createReadStream(pathToSourceFile);
    const writeStream = createWriteStream(pathToTargetFile);

    pipeline([
        readStream,
        gzip,
        writeStream
    ], (err) => {
        if (err) {
            process.exit(1);
        }
    });
};

await compress();