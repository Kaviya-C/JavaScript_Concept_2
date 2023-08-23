// ES6 introduced DataStructure that is SET

let nums=new Set();

nums.add(3);
nums.add(56);
nums.add('Kaviya');
nums.add('Janu');
nums.add(90);
nums.add(89);
nums.add(56);
console.log(nums);


for(let start of nums)
{
 console.log(start);
}
console.log('----------------')
nums.forEach( v=> console.log(v));
// collection of values does not contain duplicate values.
// set does not having index values
// if the set contains this values present or not ues has method it returns true false

console.log(nums.has(90));


// -------------- map -------------------
let map=new Map();
map.set('Janu','Js');
map.set('Kaviya','Java'),
map.set('Suba','Passion');
map.set('Janu','HR');


console.log(map.keys());
console.log(map.values());
console.log(map.has('Suba'));
console.log(map.get('Kaviya'));

for( let [key,value] of map)
{
 console.log(key+" : "+value);
}


map.forEach((val,ke)=> console.log(ke,val));
















