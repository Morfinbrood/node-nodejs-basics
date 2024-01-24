import { rm } from 'node:fs/promises';
const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';
    try {
        await rm(path);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await remove();