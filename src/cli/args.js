import { argv } from 'node:process';

const parseArgs = () => {
    const argMap = new Map();
    for (let i = 2; i < argv.length; i = i + 2) {
        argMap.set(argv[i], argv[i + 1])
    }
    console.log(argMap);
    // I think this output is more preferable that just a string
    // if this is problem - pls write me in discord
};

parseArgs();