import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const inputFilePath = './src/zip/files/fileToCompress.txt';
    const outputFilePath = './src/zip/files/archive.gz';

    const readStream = fs.createReadStream(inputFilePath, { encoding: 'utf-8' });
    const writeStream = fs.createWriteStream(outputFilePath);
    const gzipStream = zlib.createGzip();
    readStream.pipe(gzipStream).pipe(writeStream);
    readStream.on('error', (err) => {
        console.error(`Error reading the file: ${err.message}`);
    });

    writeStream.on('error', (err) => {
        console.error(`Error writing to the compressed file: ${err.message}`);
    });

    gzipStream.on('error', (err) => {
        console.error(`Error compressing the file: ${err.message}`);
    });

    writeStream.on('finish', () => {
        console.log(`File compressed successfully. Compressed file: ${outputFilePath}`);
    });
};

await compress();