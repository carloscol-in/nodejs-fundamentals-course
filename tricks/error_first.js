const { parseZone } = require("moment");

function asincrona (callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (err) {
            callback(err, null)
        }
    }, 1000);
}

asincrona((err, data) => {
    if (err) {
        console.error('We have an error: ', err);
        return false;
        // throw Error; // ! NO FUNCIONA DENTRO DE UNA FUNCION ASINCRONA
    }

    console.log('Everything ran correctly: ', data);
});