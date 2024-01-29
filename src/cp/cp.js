import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit'],
        encoding: 'utf-8',
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
        process.exit(code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
