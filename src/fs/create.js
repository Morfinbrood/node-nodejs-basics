import { writeFile } from 'node:fs/promises';
const create = async () => {
    const path = 'src/fs/files/fresh.txt';
    const data = 'I am fresh and young';
    try {
        await writeFile(path, data, { flag: 'ax+' });
    } catch (err) {
        throw new Error ("FS operation failed");
    }
};

await create();