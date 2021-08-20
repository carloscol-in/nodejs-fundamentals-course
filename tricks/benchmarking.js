let sum = 0;

// console.time('loop');
// for (let i=0; i < 1000000000; i++) {
//     sum += 2;
// }
// console.timeEnd('loop')
// console.log(sum);


console.time('asincrono');
console.log('Async process starts');
asyncFunction()
    .then(() => {
        console.log('hola');
        console.timeEnd('asincrono');
    })
    .catch(() => {
        console.log('adios');
    })
function asyncFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ends');
            resolve();
        });
    })
}