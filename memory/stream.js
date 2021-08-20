const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readable_stream = fs.createReadStream(__dirname + '/input.txt');

// readable_stream.setEncoding('UTF8');
// readable_stream.on('data', (chunk) => {
//     data += chunk;
// })

// readable_stream.on('end', () => {
//     console.log(data);
// });

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const Transform = stream.Transform;

function Mayus () {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus = new Mayus();

readable_stream
    .pipe(mayus)
    .pipe(process.stdout);