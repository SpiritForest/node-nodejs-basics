import { Transform, pipeline } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });
    pipeline([
        process.stdin,
        transformStream,
        process.stdout
    ], (err) => {
        if (err) {
            process.exit(1);
        }
    });
};

await transform();