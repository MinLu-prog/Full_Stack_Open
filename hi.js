let a = '3';
let b = '2';
let c = true ;
console.log(c)
console.log(typeof(c))

let obj = {
    valueOf(){
        console.log('value of is called ');
        return '100'
    }

}

 ans = obj  + 50 
 let c= 2  + null ; //null changes to 0 before addition
 let c= 2 + undefined; // NAN 
 let d = 10 //prefix 
 let e = ++d 
 
console.log(d)
console.log(e);

let f  = d ++//postfix
console.log(f);
console.log(d);

 console.log(c);
 console.log(ans) //10050

let num = prompt('Enter a number ')
print('The number is  ' + num + 'and ' + typeof(num))



    let obj2 = obj
    obj2.value++;
    console.log(obj2,obj);

function lmao(x){
     x = x || 10;
    console.log('the value is ' , x );
}
lmao(undefined)