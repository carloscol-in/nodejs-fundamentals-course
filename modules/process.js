process.on('exit', () => {
    console.log('The process finished');
});

process.on('beforeExit', () => {
    console.log('The process is about to finish');
})

// process.on('uncaughtException', (err, origin) => {
//     console.log('An error passed by: ', origin);
//     console.error(err);
// });

// process.on('uncaughtRejection', () => {});

// functionThatDoesntExist();