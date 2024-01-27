import { createReadStream } from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    const hash = crypto.createHash('sha256');

    try {
        const fileStream = createReadStream(path);

        fileStream.on('data', (data) => {
            hash.update(data);
        });

        fileStream.on('end', () => {
            const calculatedHash = hash.digest('hex');
            console.log('SHA256 Hash:', calculatedHash);
        });

        fileStream.on('error', (error) => {
            console.error('Error reading file:', error.message);
        });
    } catch (error) {
        console.error('Error opening file:', error.message);
    }
};

await calculateHash();