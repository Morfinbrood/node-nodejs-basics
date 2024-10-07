import { readdir, mkdir, copyFile } from 'node:fs/promises';
const copy = async () => {
    const path = 'fs/files/';
    const destPath = 'fs/files_copy/';

    try {
        const files = await readdir(path);
        await mkdir(destPath, { recursive: false });
        for (const file of files) {
            await copyFile(path + file, destPath + file);
        }
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await copy();
