// function ExecuteAfter2Sec(x){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve(x)
//         },2000)
//     })
// }

// async function f1 () {
//     const x = await ExecuteAfter2Sec(10)
//     console.log(x)
// }

// f1()

//Thenable

// async function f2() {
//     const thenable  = {
//         then(resolve) {
//             resolve('resolved')
//         }
//     }
//     console.log(await thenable)
// }
// f2()


