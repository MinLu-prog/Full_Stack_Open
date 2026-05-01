//Type Conversion 
//String to Number conversion
let a = "5";
console.log("a " + +a); // 5 
// String ကနေ Number ပြောင်းရင် ‌ရှေ့မှာ အပေါင်းလက္ခဏာထည့်ပေးရတယ်
let b = "HI"
console.log("b " + +b); // NaN
// အက္ခရာ တွေရှိတဲ့ String ကို Number ပြောင်းလို့မရဘူး ပြောင်းလို့ရှိရင် NaN ဖြစ်တယ်

let c = "5.5"
console.log("c " + +c); // 5.5
// String ကနေ Number ပြောင်းတဲ့အခါမှာ အပေါင်းလက္ခဏာထည့်ပေးရတယ် ဒါမှမဟုတ် အပေါင်းလက္ခဏာမထည့်ပေးဘူးဆိုရင် NaN ဖြစ်တယ်

let d = "5.5abc"
console.log("d " + +d); // NaN

let i = false
console.log("i " + +i); // 0
// Boolean ကနေ Number ပြောင်းတဲ့အခါ false က 0 ဖြစ်တယ် true က 1 ဖြစ်တယ်
// dar lal NAN pal အက္ခရာတွေပါသွားလို့

let g = {}
console.log("Object is " + +g); // NaN

//Number to String Conversion 
let e = 5
console.log("e " + e + "")
//Number ကနေ String ပြောင်းရင် string အလွတ် တစ်ခုနဲ့ ပေါင်းပေးရတယ် ဒါမှမဟုတ် String() function ကိုသုံးလို့ရတယ်
let f = 5
console.log("f " + String(f))

let h = {}
console.log("Object is " + h +"")
//Object ကနေ ှString ပြောင်းရင် object object ပြန်ထွက်တယ် 
let j = true;
console.log("j " + j +"")

// String() function က Number ကို String ပြောင်းပေးတယ်

// ! operator
let k = false
console.log("!!k" +  !!k) 
console.log('!!0' , !!0)
console.log('!!NAN' , !!NaN)
console.log('!!""'  , !!"")
//false ဖြစ်တဲ့ value တွေကို !! operator နဲ့ Boolean ပြောင်းလို့ရတယ် false ဖြစ်တဲ့ value တွေက 0, NaN, "", false တို့ပါ
//  true ဖြစ်တဲ့ value တွေကို !! operator နဲ့ Boolean ပြောင်းလို့ရတယ် true ဖြစ်တဲ့ value တွေက 1, true တို့ပါ

//Explcit Type Conversion
let l = "5"
console.log("l " + Number(l)) // 5
// String ကနေ Number ပြောင်းတဲ့အခါမှာ Number() function ကိုသုံးလို့ရတယ် ဒါမှမဟုတ် အပေါင်းလက္ခဏာထည့်ပေးရတယ်
let m = "5.5"
console.log("m " + Number(m)) // 5.5
//ဒဿမ ကိန်း ပါတဲ့ string တွေလဲသုံးလို့ရ   
let n = "5.5abc"
console.log("n " + Number(n)) // NaN
//ရှေ့ကအတိုင်းပဲ NaN ဖြစ်တယ် 

let o = 5
console.log("o " + String(o)) // 5
//Number ကနေ String ပြောင်းတဲ့အခါမှာ String() function ကိုသုံးလို့ရတယ် ဒါမှမဟုတ် string အလွတ် တစ်ခုနဲ့ ပေါင်းပေးရတယ်

//Obj 

let obj = {
    toString(){
        console.log('To string called ');
        return "Hello"

    },
    valueOf(){
        console.log("valueOf called")
        return 100
    }
    
}
console.log("obj " + obj) // Hello

