// first way of creating array
let values1 = new Array();

//second way
let values2 = [9, 8, 7];
console.log(values2);
values2.push(6); // push mean add values to the array
console.log(values2);
console.log(" Size of the array: " + values2.length);

// if u want to print whole values in the array we can directly call that array variable
// if u want to print one by one then we can go with for loop bcoz it has index number to access the each values in the array
for (let index = 0; index < values2.length; index++) {
  console.log(values2[index]);
}

// if the array contain different types of data?? like number and string

let names = ["Kaviya", "Geetha", "John", "Raj"];
console.log(names);

// if i want to add one more data to the array after creating array.
names.push("Seetha");
// --> this is one way to add the data

// --> one more way to add the data
// we already had 5 data that mean start from 0 end to 4 now use that index number 5 to add the data
names[1] = "Suba";
console.log(names);
// if the index number which is given by me should be double check bcoz if that index number already data is there mean
//whatever data am type now that is replaced in that place so we have to take care of that..
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

// can array hold different types of datatypes
let data = [
  "Kaviya",
  8,
  { brand: "Asus" },
  function () {
    console.log("Hai kaviya what's up!!");
  },
];

console.log(data);
data[3]();

// -----------------different types of arrays-----------------------

//  --- push --- append the data at the end of the array
let datas = [5, 3, 2, 1, 9];
console.log(datas.push(4));
console.log(datas);

// -- pop --
// delete the data at the end of the value present in the array.
console.log(datas.pop()); // return which element going to pop
console.log(datas);

// ------- shift method -----------
console.log(datas.shift());
// shift will push all the values to the left hand side
// basically it will delete the first value of the array.
console.log(datas);

// pop remove the data at the end of the array
// shift remove the data at the start of the array

// push add the data in the end of the array
// unshift will add the data in the start of the array

console.log(datas.unshift(100));
console.log(datas);

// " unshift , shift " little bit complicated bcoz it change the index number first shift to left side then will perform the operation

// -----------------splice method -----------
// i want to remove the element between of the array
console.log(datas.splice(3));
// from 3 rd index to end of the value are deleted
console.log(datas);

// if i want to remove one element
console.log(datas.splice(0, 1));
console.log(datas);

// in splice  parameters are:
//  start value :
// how many element u want to delete that count give in second parameter
//third parameter we can add the elements as many we want [300,900.800]
console.log(datas.splice(1, 1, 300, 900, 800));
console.log(datas);

//----------------print all the values one by one in array:

// for printing array we have for loop with for-of loop
// printing object values one by one use for-in-loop
let array1=[];
array1[0]=0;
array1[1]=1;
array1[10]=9;

// for -of loop print all the values including undefined values too
for(let each of array1)
{
 console.log(each);
}

// ----- for-in loop print only the data not the undefined values
for(let key in array1)
{
 console.log(array1[key]);
}



// --------------Destructure Array ----------------------
let numbers=[5,6,7,2,1];
console.log(numbers);

// this is one way to destructure the array into seperate
let a=numbers[0]; let b=numbers[1]; let c=numbers[2];
let d=numbers[3]; let e=numbers[4];
console.log(a,b,c,d,e);


// another way
let [v,w,x,y,z,]=numbers;
console.log(x);

// can i skip some elements yes it is possible
let[m,n,,o,,] =numbers
console.log(m);
console.log(o);

// swap two values using destructure of array 
let first=100;
let last=200;
[first,last]=[last,first];
console.log(first,last);


// assigned string 
let words="Myself Kaviya...";
console.log(words);


// split using spaces
let words1="myself kaviya most ambitious person".split(' ');
console.log(words1);
console.log('------------------');
for(let word of words1)
{
 console.log(word);
}

// --------------------------------------
console.log('-------------------------');
let[q,r,s,t,u]=words1;
console.log(r);
console.log(s);

// if u want to display all the elements to the end
let wording="How was the day..! kaviya".split(' ');
let [,,...k]=wording;
console.log(k);

// .. means rest of the letter everything will be displayed

