//1.ways to print in JavaScript
//console.log("Hello World");
//alert("me");
//document.write("this is document write");

//2.Javascript console API

/*
console.log("Hello World");
console.warn("this is a warning");
console.error("this is an error");
*/

//3. javaScript variables
//Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1+number2);

//4. Data types in javaScript
//Numbers
var num1 = 455;
var num2 = 56.76;

//string
var str1 = "This is a string";
var str2 = "This is also a string";

//Objects
var marks = {
  ravi: 34,
  shubham: 78,
  harry: 99.977,
};
// console.log(marks);

//booleans
var a = true;
var b = false;
// console.log(a,b);

//var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of datatypes in js
1.Primitive data types: undefined, null, number, string, boolean, symbol
2.Reference data types: arrays and objects
*/

var arr = [1, 2, "babu", 4, 5];
// console.log(arr);

//operators
//arithmetic operator
//assignment operator
//comparison operator
//logical operator  &&, || ,!

//Functions in js
//DRY = Do not repeat yourself
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

//conditionals in js
//if
//if else
//if else ladder

//loops
var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);

/* 
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} 
*/

//another method for iterating in an array

/*
arr.forEach(function (element) {
  console.log(element);
});
*/

//while loop
let j = 0;
//const ac=0;

/*
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}
*/

//dowhile loop

/*
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);
*/

//break and continue

//Array methods
let myArr = ["Fan", "Camera", 34, null, true];
//console.log(myArr.length);
myArr.pop(); //pops out last element.
myArr.push("harry"); //insert this element in the last
myArr.shift(); //removes first element
const newLen = myArr.unshift("Harry"); //unshift will include this element in the first index in the array.
//console.log(newLen);
myArr.sort(); //sort the array

//string methods in js
let string = "Harry is a good good boy";
//console.log(string.length);
//console.log(string.indexOf("good"));
//console.log(string.lastIndexOf("good"));
//console.log(string.slice(1,4));
d = string.replace("Harry", "Rohan");
//console.log(d, string);

//date 
let myDate = new Date();
//console.log(myDate.getTime());
//console.log(myDate.getFullYear());
//console.log(myDate.getDay());
//console.log(myDate.getMinutes());
//console.log(myDate.getHours());

//DOM - DOCUMENT OBJECT MODEL
//DOM Manipulation

let elem = document.getElementById('click');
//console.log(elem);

let elemClass = document.getElementsByClassName('container');
//console.log(elemClass);
elemClass[0].style.background = "yellow";
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
//console.log(tn);
createdElement= document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
//removeChild(element); --> removes an element
//replaceChild(current element,prev element);  --> replaces the element

//Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

//Events in JS
// function clicked(){
//     console.log('The button was clicked');
// }

// window.onload = function(){
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Container was clicked");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseover', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse out of container");
// })


//Arrow Functions

// function summ(a,b){
//     return a+b;
// }
// another wayy

summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval Fired </b>";

    console.log("I am your log");
}
// SetTimeout and setInterval
//clr = setTimeout(logKaro, 5000);
// logKaro is a function
//clr = setInterval(logKaro, 2000);
// we use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout.


//javaScript localStorage
//data user k computer pe save krne me madad krti hai
//key value pairs daaal skte hain local storage k andar
// setItem aur getItem k help se
//localStorage.setItem('name','harry')
//localStorage
//localStorage.getItem('name');
//localStorage.removeItem('name')
//localStorage.clear();


//JSON - JavaScript object notation
//data ko exchange krne me istemal kiya jata h
//json sirf double quotes accept krta h
//lekin objects single quotes v accept kr skta hai
// obj = {name: "harry", length: 1, a: {this:'that'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

//Templates literals - Bacticks
a=34;
console.log(`this is my ${a}`);











































