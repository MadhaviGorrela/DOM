//Math Method//
document.querySelector(".math").innerHTML = "Math Methods";
const x = Math.trunc(4.5);
console.log(x);
document.querySelector(".math1").innerHTML = x;
const y = Math.trunc(-4.5);
console.log(y);
document.querySelector(".math2").innerHTML = y;

const z = Math.sign(5.6);
console.log(z);
document.querySelector(".math3").innerHTML = z;
const a = Math.sign(-5.6);
console.log(a);
document.querySelector(".math4").innerHTML = a;

const b = Math.random();
console.log(b);
document.querySelector(".math5").innerHTML = b;
const c = Math.random()*5;
console.log(c);
document.querySelector(".math6").innerHTML = c;

const d = [234, 5757, 563, 9876, 4232];
console.log(Math.max.apply(null,d));
document.querySelector(".math7").innerHTML = Math.max.apply(null,d);
console.log(Math.min.apply(null,d));
document.querySelector(".math8").innerHTML = Math.min.apply(null,d);
//Set time out//
document.querySelector(".set").innerHTML = "Set timeout and set intervals";
setTimeout(function myfunction(){
    console.log("hello world");
    document.querySelector(".set1").innerHTML = "hello world";
},6000);
setInterval(function myFunction(){
    console.log("hello world");
    document.querySelector(".set2").innerHTML = "hello world";
},6000);

const interval = setInterval(function MyFunction(){
    console.log("hello world");
    document.querySelector(".set3").innerHTML = "hello world";
},600);
setTimeout(function myfunctions(){
    clearInterval(interval);
},4000);

const button = document.querySelector(".Intervals");
setTimeout(function fun(){
    button.innerText = "Hello worlds"; 
},10000);

const buttons = document.querySelector(".Intervals");
const Intervals = setInterval(function fun1(){
    buttons.classList.toggle("Intervals-active");
},500);
setTimeout(function fun2(){
    clearInterval(Intervals);
},20000);

//DOM Intro//
const todo = document.querySelector(".todo");
const div = document.createElement("div");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li1");
const li2 = document.createElement("li2");
const li3 = document.createElement("li3");
const li4 = document.createElement("li4");
li.innerText = "Home";
li1.innerText = "About us";
li2.innerText = "Carrer";
li3.innerText = "Contact";
li4.innerText = "Gallery";
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
div.appendChild(ul);
todo.appendChild(div);
ul.className="unorderlist";
div.className="divison";
 //loops//
 //for loop//
 console.log("For loop");
 for(let i = 0;i<10;i++){
    console.log(i);
 };
console.log("while loop");
 let i = 0;
 while(i<10){
    console.log(i);
    i++;
 };
 //do while//
 console.log("do while");
 let  p = 0;
 do{
    console.log(p);
    p++;
 }
 while(p<5);
 //condition statements//
 const u = 20;
 if(x<30){
    console.log("true");
 }else{
    console.log("false");
 }
 const q = 20;
 if(q<20){
    console.log("hey");
 }else if(q<30)
 {
    console.log("hello");
 }
 else{
    console.log("hi");
 }
 const time = new Date().getHours();
 console.log(time);
 let times;
 if(time<9){
    times = "good morning";
 }else if(time<11){
    times = "good day";
 }else{
    times = "good afternoon";
 }
 console.log(times);
