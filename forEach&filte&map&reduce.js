// // for each method

let nums=[34,6,78,80,12,66];
console.log(nums);

nums.forEach(
(num)=>
{
console.log(num);
}
);

// // we can also print each number,index number ,whole array
nums.forEach((values,index,nums)=>
{
 console.log(values,index,nums);
})

//-------------------------------------------

nums.forEach(
n => console.log(n)
);

// filter method === check the conditions

// map === change one value to another formation of value

// for each print all the values as it is

let number=[9,80,78,76,5,3,90];
number.filter( num => num%2===0 )
                .forEach( each =>
                 console.log(each*each));


let number1=[9,80,78,76,5,3,90];
                 number.filter( num => num%2===0 )
                 .map( n => n*2 )
                .forEach( each =>
                 console.log(each));


let number2=[3,3,1,3,3,3,7]
let results=number2.filter( a=> a%2!==0)
                 .map(num=> num)
                 .reduce((first,next) => (first+next));

console.log(results);
















