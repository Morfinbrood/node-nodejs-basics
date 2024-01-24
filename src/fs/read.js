import { readFile } from 'node:fs/promises';
const read = async () => {
    const path = 'src/fs/files/fileToRead.txt';

    try {
        const res = await readFile(path, { encoding: 'utf8' });
        console.log(res);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await read();