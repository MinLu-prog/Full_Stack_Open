function ExecuteAfter2Sec(x) {
    return new Promise((resolve,reject)=>{
        setTimeout(
            resolve(x),1000
        )
    })
}


async function f1() {
    const x = await ExecuteAfter2Sec(10);
    console.log(x)
}

f1()