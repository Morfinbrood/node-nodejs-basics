import { readdir } from 'node:fs/promises';

const list = async () => {
    const path = 'src/fs/files/';
    try {
        const files = await readdir(path);
        console.log(files);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await list();