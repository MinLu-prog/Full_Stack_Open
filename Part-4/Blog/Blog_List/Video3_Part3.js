import window from 'global/window'
const obj = {
    name: 'zhangsan',
    age: 20,
}

// ❌ Trying to reassign the whole object
obj = {
    name: 'lisi',
    age: 25,
}
//ဒီလိုဆို error တက်ပါတယ် constant တစ်ခုကို reassign လုပ်လိုမရပါ

obj.name = 'Hsu hsu'
//ဤလိုဆိုရင်တော့ object ရဲ့ property ကို ပြောင်းလဲတာဖြစ်ပြီး error မတက်ပါဘူး constant တစ်ခုကို reassign လုပ်လိုမရပေမယ့် object ရဲ့ property ကိုပြောင်းလဲတာကတော့ရပါတယ်
//container  ကိုမပြောင်းပဲ container အတွင်းမှာရှိတဲ့ data ကိုပြောင်းလဲတာကတော့ရပါတယ်
obj.age++;
console.log(obj) //Hsu Hsu 21 ဆိုပီးထွက်လာမယ် 

//ဘာလို့ var အသုံးမပြုသင့်တာလဲ့့

//let တို့ const တို့  var တို့မသုံးပဲနဲ့ဒီတိုင်း variable  သတ်မှတ်တယ်ဆိုရင် window scope မှာ variable ကိုသတ်မှတ်တာဖြစ်ပြီး အဲဒီ variable ကို ဘယ်နေရာကနေမဆို access လုပ်လို့ရပါတယ် ဒါကတော့ အမှားတစ်ခု ဖြစ်နိုင်ပါတယ်

a= 10;
console.log(a) // 10 ဆိုပီးထွက်လာမယ်
function hello(){
    console.log(a) // 10 ဆိုပီးထွက်လာမယ်
    data = 'something '

}
hello()
console.log(data) // something ဆိုပီးထွက်လာမယ်
console.log('global data ' ,window.data) //something 

var top = 100;
console.log('Top is ' + top == 100) // false
//window မှာ top ဆိုတဲ့ property ရှိတယ် ဒါကြောင့် window.top ကို 100 လို့သတ်မှတ်လိုက်တာဖြစ်ပြီး window.top ကတော့ 100 မဟုတ်ပါဘူး ဒါကြောင့် false ဖြစ်ပါတယ်

//Destructing 

let age0 = 20;
let age1 = 30;
let ages = [20,30]
console.log('ages', ages[0],'', ages[1]);//ဒီလိုဆိုရင်တော့ array ထဲက element တွေကို access လုပ်လို့ရပါတယ်
console.log('ages',...ages)//ဒီလိုဆိုရင်တော့ array ထဲက element တွေကို destructuring လုပ်လို့ရပါတယ်
//Destructuring ဆိုတာက array ထဲက element တွေကို ထုတ်တာဆိုလိုတာပါ

let c = 40;
let d = 50;
let temp = c;
c= d ;
d = temp;
console.log('c is ' + c) // 50
console.log('d is ' + d) // 40


[d,c] = [c,d]
//[d, c] = [50, 40] ပုံစံဖြစ်သွားတယ် 
console.log('c is ' + c) //40
console.log('d is ' + d) //50