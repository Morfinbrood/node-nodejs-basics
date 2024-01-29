import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const inputFilePath = './src/zip/files/archive.gz';
    const outputFilePath = './src/zip/files/fileToCompress.txt';

    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath, { encoding: 'utf-8' });
    const gunzipStream = zlib.createGunzip();
    readStream.pipe(gunzipStream).pipe(writeStream);
    readStream.on('error', (err) => {
        console.error(`Error reading the compressed file: ${err.message}`);
    });

    writeStream.on('error', (err) => {
        console.error(`Error writing to the decompressed file: ${err.message}`);
    });

    gunzipStream.on('error', (err) => {
        console.error(`Error decompressing the file: ${err.message}`);
    });

    writeStream.on('finish', () => {
        console.log(`File decompressed successfully. Decompressed file: ${outputFilePath}`);
    });
};

await decompress();