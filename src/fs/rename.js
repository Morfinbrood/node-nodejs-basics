import { rename as renameFS, access, constants } from 'node:fs/promises';

const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';

    try {
        try {
            await access(oldPath, constants.F_OK);
        } catch {
            throw new Error("FS operation failed: Source file does not exist");
        }

        try {
            await access(newPath, constants.F_OK);
            throw new Error("FS operation failed: New file already exists");
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        await renameFS(oldPath, newPath);
        console.log('File renamed!');
    } catch (err) {
        console.error('Error:', err.message);
        throw new Error("FS operation failed");
    }
};

await rename();
