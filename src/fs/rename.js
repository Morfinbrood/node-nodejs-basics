import { rename as renameFS, access, constants } from 'node:fs/promises';
const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';
    try {
        const isNewPathStillExisted = await access(newPath, constants.F_OK);
        if (isNewPathStillExisted) {
            throw new Error("FS operation failed");
        }
        await renameFS(oldPath, newPath);
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await rename();