import { Worker } from 'worker_threads';
import os from 'os';


function createWorkerThread(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });

        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

const performCalculations = async () => {
    try {
        const numCPUs = os.cpus().length;
        const workerPromises = [];

        for (let i = 0; i < numCPUs; i++) {
            const n = 10 + i;
            const workerPromise = createWorkerThread(n);
            workerPromises.push(workerPromise);
        }

        const results = await Promise.all(workerPromises);
        console.log('Results:', results);
    } catch (error) {
        console.error('Error:', error);
    }
};

await performCalculations();