import { cp } from 'node:fs/promises';
const copy = async () => {
    const path = 'fs/files/';
    const destPath = 'fs/files_copy/';

    try {
        await cp(path, destPath, {
          recursive: true,
          errorOnExist: true,
          force: false,
        });
        console.log('Folder copied!');
      } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
          throw new Error('FS operation failed');
        } else {
          console.error(err);
        }
      }
};

await copy();
