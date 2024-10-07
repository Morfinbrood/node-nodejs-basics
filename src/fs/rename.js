import { rename as renameFS, access, constants } from 'node:fs/promises';

const rename = async () => {
    const oldPath = 'fs/files/wrongFilename.txt';
    const newPath = 'fs/files/properFilename.md';
    try {
        try {
            await access(newPath, constants.F_OK);
            throw new Error("FS operation failed: New file already exists");
        } catch {

        }

        await renameFS(oldPath, newPath);
        console.log('File renamed!');
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await rename();
