let fruits = [
    {
        name: 'banana',
        count: 10
    }, 
    {
        name: 'grape',
        count: 18
    }, 
    {
        name: 'avocado',
        count: 25
    }, 
    {
        name: 'mango',
        count: 27
    }, 
    {
        name: 'lime',
        count: 23
    }, 
];

let fruitName = fruits.name;

let result = fruits.map(function (fruits, fruitName){
    let fruit = {
        name: fruitName,
    };

    return fruit;
});
console.log(result);