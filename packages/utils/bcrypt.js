const bcrypt = require('bcrypt');

let passwd = 'Hola123!'

bcrypt.hash(passwd, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(passwd, hash, (err, res) => {
        console.log(res);
    })
});