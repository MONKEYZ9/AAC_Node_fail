function sayHello() {
    return new Promise((resolve, reject) => {
        // when success => resolve
        const hello = "Hello hello";
        resolve(hello); // resolve in hello

        // when error ==> reject
        // reject(new Error());
    });
}
// how to use it 
// sayHello().then((resolveData) => {
//     console.log(resolveData);
// });
// when error happen ==> use 'catch'
// sayHello().then((resolveData) => {
//     console.log(resolveData);
// }).catch((error)=> {
//     console.log(error); //print error in console

// });

// when use 'then' again
// sayHello().then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .catch((error)=> {
//     console.log(error); //print error in console
// });
// it look very horrible

// so you can use this!!!!
// function test() {
//     const hello1 = sayHello();
//     // when u write this => you can't use 'promise',  you must write 'async' and 'await'
// }

//async function test() {
//    // const hello1 = sayHello();
//    // when u write this => you can't use promise
//    const hello1 = await sayHello();
//    console.log(hello1);
//}

test();






