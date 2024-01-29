import { Transform } from 'stream';
class ReverseTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
    }
}

const transform = async () => {
    process.stdin.pipe(new ReverseTransform()).pipe(process.stdout);
};

await transform();