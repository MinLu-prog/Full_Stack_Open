var animals = [
    {name : 'Bruce', species : 'dog'},
    {name : 'Mittens', species : 'cat'},
    {name : 'Fluffy', species : 'rabbit'},
    {name : 'Tweety', species : 'bird'},
    {name : 'Spot', species : 'dog'}
]

// for ( var i  = 0 ; i < animals.length ; i ++){
//     if(animals[i].species === 'dog'){
//         dog.push(animals[i]);
//     }
// }

//filter method 
//filter method creates a new array with all elements that pass the test implemented by the provided function 
const isdog = (animals) =>{
    return animals.species === 'dog';
}

// const dogs = animals.filter(isdog);
// console.log(dogs);
//map : use whatever you want and return the new array of it
const animal = animals.map((name,species) =>{
    return name.name + " is a " + name.species;
})
console.log(animal);

//reduce : executes a reducer function on each element of the array resulting in a single output value 

var orders = [
    { amount : 250},
    { amount : 400},
    { amount : 100},
    { amount : 325}
];

var totalAmount = orders.reduce((sum,order) => sum+order.amount , 0);
console.log(totalAmount);

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// var totalAmount = orders.reduce((sum, order) => sum + order.amount , 0);
// console.log(totalAmount);
//Initial value is 0
// order.reduce((accumualtor,currentValue) => accumulator + currentValue.amount ,initialValue);

// const total = orders.reduce(function(sum,order){
//     return sum + order.amount;
// },0)

// var totalAmount = 0;
// for (var i = 0 ; i< orders.length ; i ++){
//     totalAmount += orders[i].amount;
// }
// console.log(totalAmount);

//reduced method 
