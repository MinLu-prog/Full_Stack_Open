const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition : function(a,b) {
    console.log(a+b);
  }
}

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
arto.doAddition(1,4)  // 5 is printed
arto.greet()  // "hello, my name is Arto Hellas" is printed
const hello  = arto.greet
hello()  // "hello, my name is undefined" is printed


setTimeout(arto.greet.bind(arto),2000)  // "hello, my name is Arto Hellas" is printed after 2 seconds

class Person {
    constructor(name, age) {
        this.name = name ;
        this.age = age;

    }
    greet( ){
        console.log('hello, my name is ' + this.name)
    }
    
}
const adam = new Person('Adam', 45)
adam.greet()  // "hello, my name is Adam" is printed

const bruce = new Person('Bruce', 30)
bruce.greet()  // "hello, my name is Bruce" is printed