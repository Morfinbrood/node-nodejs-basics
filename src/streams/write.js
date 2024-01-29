import { createWriteStream } from 'node:fs';

const write = async () => {
    const filePath = './src/streams/files/fileToWrite.txt';
    const writableStream = createWriteStream(filePath, { encoding: 'utf-8' });

    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });

    process.stdin.on('end', () => {
        writableStream.end();
        console.log(`Data has been written to ${filePath}`);
    });

    writableStream.on('error', (err) => {
        console.error(`Error writing to the file: ${err.message}`);
    });
};

await write();