import { Worker } from 'worker_threads';
import path from 'path';
import * as url from 'url';
import os from 'os';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const createWorker = (indexOfFibonacciToCalculate) => {
    const pathToWorkerThread = path.join(__dirname, './worker.js');

    return new Worker(pathToWorkerThread, {
        workerData: indexOfFibonacciToCalculate
    });
}

const listenToWorkerMessage = (worker) => {
    return new Promise((res) => {
        worker.on('message', (message) => {
            worker.terminate();
            res({
                status: 'resolved',
                data: +message,
            });
        });
        worker.on('error', () => {
            res({
                status: 'error',
                data: null,
            });
        });
    });
};

const performCalculations = async () => {
    const numberOfCpus = os.cpus().length;
    const workersResultPromise = [];
    let indexOfFibonacciToCalculate = 10;

    for (let i = 0; i < numberOfCpus; i += 1) {
        const worker = createWorker(indexOfFibonacciToCalculate);
        workersResultPromise.push(listenToWorkerMessage(worker));

        indexOfFibonacciToCalculate += 1;
    }

    Promise.all(workersResultPromise).then((workerResults) => {
        console.log(workerResults);
    });
};

await performCalculations();