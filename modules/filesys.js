const fs = require('fs');

const read = async (f_path, callback) => {
    fs.readFile( f_path, (err, data) => {
        console.log(data.toString());
    })
}

const write = async (f_path, content, callback) => {
    fs.writeFile(f_path, content, (err) => {
        if (err) {
            console.error('Error writing on the file: ', err);
        } else {
            console.log('File writen correctly.');
        }
    })
}

const delete_f = async (f_path, callback) => {
    fs.unlink(f_path, callback);
}

const main = async () => {
    await read(`${__dirname}/file.txt`);
    await write(`${__dirname}/file2.txt`, 'I\'m a new file', console.log);
    await delete_f(`${__dirname}/file2.txt`, console.log);
}

main();