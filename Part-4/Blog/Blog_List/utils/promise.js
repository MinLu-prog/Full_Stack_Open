// const { rejects } = require("node:assert");

// const promise = new Promise((resolve,reject) =>{
//     setTimeout(() => resolve(1),1000)
// })

// promise.then(result =>{
//     result = result * 2
//     console.log(result);
//     return result
// }).then( (result) =>{
//     result = result * 2
//     console.log(result)
// }
// )

const promise = new Promise((resolve,reject) =>{
    setTimeout(() => {
    resolve(1)   
    }, 1000);
})

promise.then((result) =>{
    result =result * 2 ;
    console.log(result);
})

promise.then((result) =>{
    result = result * 2;
    console.log(result)
})