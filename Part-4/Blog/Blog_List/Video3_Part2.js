       function hello()
        {
            console.log('a is ', a); //undefined ဖြစ်မယ် 
            //a ကို အောက်မှာ var နဲ့ define လုပ်ထားတာကြောင့် hoisting ဖြစ်ပြီး အပေါ်မှာ a ကို undefined အဖြစ်သတ်မှတ်ပေးထားတာပါ
            
            
            var a=20;
            console.log('hello', a);

            var a = "Hello";
            console.log('hello', a);
        }
        hello();
        //console.log('a is ', a);

        function another()
        {
         //Scope ဆိုတာက variable တွေကို ဘယ်ကနေ ဘယ်အထိ access လုပ်လို့ရမလဲဆိုတာသတ်မှတ်ပေးတာ
         //var ကကြတော့ redefined လုပ်လို့ရ
         //let ကကြတော့ redefined လုပ်လို့မရ
         //const ကကြတော့ redefined လုပ်လို့မရ
         //var ကို သိပ်မသု့းပါနဲ့ let နဲ့ const ကိုသုံးပါ

            {
                var b = 20;
                let a= 10;
                console.log('a is ', a);

                //let a =20;
                //let a = "Hello";
                console.log('a is ', a);
            }
            

            console.log('second a is ', a);
            console.log('b is ', b);
        }
        another();
        let a = 100;
        a = 200;

        const b = 100;
        //b = 200;