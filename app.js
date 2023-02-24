//? ------------------------------chapter 13to15-----------------------------------------

//!question:01
// code
// var emptyArray=[]

//!question:02
// code:
// var stuName=[]

//!question:03
// code:
// var arr=['daniyal','ali','afaq','nazir','shams'];

//!question:04
// code:
// var arr=['12','003','23','54','43'];

//!question:05
// code:
// var arr=['true','false'];

//!question:06
// code:
// var arr=['daniyal','ali','afaq','nazir','44','566','true','false'];

//!question:7
// code:
// var qualification=['ssc','hsc','bcs','bs','bCom','ms','m.phil','phd']
// console.log(qualification)

//!question:8
// code:
// var nam=['ahmed','ali','shams'];
// var score=['320','450','300'];
// var totalMarks=500;
// console.log("Score of"+" "+nam[0]+ " " +"is" + " " + score[0]+ " " +"percentage :"+score[0]/500*100);
// console.log("Score of"+" "+nam[1]+ " " +"is" + " " + score[1]+ " " +"percentage :"+score[1]/500*100);
// console.log("Score of"+" "+nam[2]+ " " +"is" + " " + score[2]+ " " +"percentage :"+score[2]/500*100);

//!question:9
// code:
// //? part(A)
// var color=['red','blue','pink'];
// console.log(color);
// var user=prompt("what color he/ wants to add this beginning:");
// color.unshift(user);
// console.log(color);

// code:
//? part(B)

// var color=['red','blue','pink'];
// console.log(color);
// var user=prompt("what color he/ wants to add at the end of array:");
// color.push(user);
// console.log(color);

// code:
//? part(c)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// var user2=prompt("what color he/ wants to add at the end of array:");
// color.unshift(user1,user2);
// console.log(color);

// code:
//? part(d)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// color.shift(user1);
// console.log(color);

// code:
//? part(e)
// var color=['red','blue','pink'];
// console.log(color);
// var user1=prompt("what color he/ wants to add at the end of array:");
// color.pop(user1);
// console.log(color);

// code:
//? part(f)
// var color=['green','blue','black']
// var  color1=prompt("Enter a color:");
// var  indexNum=prompt("Enter a index number:");
// color.splice(indexNum,0,color1)
// console.log(color)

// code:
//? part(g)
// var color=['green','blue','black'];
// console.log(color);
// var indexNum=+prompt("Enter a start index number ");
// var limit=+prompt("Enter a counter to delete number: ")
// color.splice(indexNum,limit)
// console.log(color)

//!question:10
// Array sort method
// var stuScore=[320,230,480,120];
// stuScore.sort()
// console.log(stuScore)

//!question:11
// code:
// var cities=['karachi','lahore','islamabad','quetta','peshawar'];
// // copy_list of cities:
// var newObj=cities.slice(2,4)
// console.log(newObj);

//!question:12
// code:

// var arr=['this','is','my','cat'];
// arr.join('')
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('-'));

//!question:13

// create an empty array
let fifoArray = [];

// add values to the array using push()
// fifoArray.push("keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");
// access and remove the first value from the array using shift()
// let first=fifoArray.shift()
// let Second=fifoArray.shift()
// let third=fifoArray.shift()
// console.log(first)
// console.log(Second)
// console.log(third)

//!question:14

// let last=[]
// last.push("keyboard");
// last.push("mouse");
// last.push("pointer");

//  let first=last.pop()
//  let Second=last.pop()
//  let third=last.pop()

//  console.log(first)
// console.log(Second)
// console.log(third)

//! QUESTION NO 15
// const phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// document.write('<select>');
// document.write(`<option value="${phoneManufacturers[0]}">${phoneManufacturers[0]}</option>`);
// document.write(`<option value="${phoneManufacturers[1]}">${phoneManufacturers[1]}</option>`);
// document.write(`<option value="${phoneManufacturers[2]}">${phoneManufacturers[2]}</option>`);
// document.write(`<option value="${phoneManufacturers[3]}">${phoneManufacturers[3]}</option>`);
// document.write(`<option value="${phoneManufacturers[4]}">${phoneManufacturers[4]}</option>`);
// document.write(`<option value="${phoneManufacturers[5]}">${phoneManufacturers[5]}</option>`);
// document.write('</select>');


// Question #1

// var emptyArray = [[]]; 

// Question #2

// var matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];

// Question #3

// for(var i = 1; i <=10; i++){
//     document.write(i + "<br/>");
// }

// Question #4

// var tableNumber = +prompt("Enter Table Number");
// var tableLength = +prompt("Enter The Length of the Table");
// document.write("<h1 > Multiplication table of " + tableNumber + "</h1>");
// document.write("<h1> Length " + tableLength + "</h1>");
// for(var i = 1; i <= tableLength; i++){
//     document.write(tableNumber + " x " + i + " " + " = " + tableNumber * i + "<br/>");
// }


// Question #5


// var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

// for(i = 0; i <= 4 ; i++){
//     document.write(fruits[i] + "<br/>");
//     document.write("Element at Index " + i + " is "  + fruits[i] + "<br/>");
// }


// Question #6
// document.write("<h1>Counting: <br/> <h1>");
// for(var i = 1 ; i <= 15; i++){
//     document.write(" " + i);
// }

// document.write("<h1>Reverse Counting: <br/> <h1>");
// for(var i = 10 ; i >= 1; i--){
//     document.write(" " + i);
// }


// document.write("<h1>Even: <br/> <h1>");
// for(var i = 0 ; i <= 20; i+=2){
//     document.write(" " + i);
// }

// document.write("<h1>Odd: <br/> <h1>");
// for(var i = 1 ; i <= 19; i+=2){
//     document.write(" " + i);
// }

// document.write("<h1>Series: <br/> <h1>");
// for(var i = 2 ; i <= 20; i+=2){
//     document.write(" " + i + "k");
// }

// Question #7

// var array = ["Cake" , "Apple pie", "Cookie", "Chips"]
// var userInput = prompt("What item are you looking for?")
// var flag = false

// for (var i = 0; i < array.length; i++){
//     if(array[i] == userInput){
//         flag = true;
//         break;
//     }
// }
// if(flag){
//     alert("The item is found in the list!");
// }else{
//     alert("The item is not found in the list!")
// }

// Question #8

// var arr = [24 , 53 , 78 , 91 , 12];
// var largest = 0 ;
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// document.write("<h1>The Largest number is " + largest)


// Question #9

// var arr = [24 , 53 , 78 , 91 , 12];
// var smallest = arr[0];
// document.write("<h1> Array Items:" + arr + " </h1>")

// for(var i = 1 ; i < arr.length; i++){
//     if(arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// document.write("<h1>The Smallest number is " + smallest)


// Question #10

// for(var i = 1 ; i <= 100; i++){
//     if(i % 5 === 0){
//         document.write(" " + i);
//     }
// }