const getData = async () => {
    return new Promise((resolve, reject) => {
        resolve('a');
    });
}

getData()
    .then((num1, num2) => {
        console.log(num1, num2);
    })