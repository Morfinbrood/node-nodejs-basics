import { createReadStream } from 'node:fs';

const read = async () => {
    const filePath = './src/streams/files/fileToRead.txt';
    const readableStream = createReadStream(filePath, { encoding: 'utf-8' });

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readableStream.on('end', () => {
        console.log('\nFile reading completed.');
    });

    readableStream.on('error', (err) => {
        console.error(`Error reading the file: ${err.message}`);
    });
};

await read();