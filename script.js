var num=1;
console.log("value of num is :"+ num);
// alert("This is a test message.\n Value of Num is :" + num);
var val=10;
console.log("value fo val: "+val);
var str="Bharath";
console.log("String name is :"+str);
var Arr=[2,4,"Element",3,5,4];
console.log("Array type is  :"+Arr);
var bool="True";
console.log("Boolean type is :"+bool);
var mularr=[1,32,[4,23]];
// console.log("MultiDimentional array :"+mularr);
console.log(mularr)

// if else

var num2=20;
if(num2>30){
    console.log("num is greater than 30");
}else if(num>40){
    console.log("num is not greater than 40");
}else{
    console.log("num is less 30.");
}

// Greeting messages.
var hour=14;
if(hour<12){
    console.log("Good morning");
}else if(hour<16){
    console.log("Good Afternoon");
}else if(hour<19){
    console.log("Good Evening");
}else if(hour>24){
    console.log("Bad Input");
}else{
    console.log("Good Night");
}

// even or odd 
var num3 = prompt("Enter Integer value to check even or odd.");
console.log(num3);
if(num3%2==0){
    alert(num3+" is Even Number.");
}else{
    alert(num3+" is Odd Number");
}

// Switch Statement

var num4=prompt("Enter any Number between 1 to 7.");

switch(num4){
    case 1:
        console.log("Today is Sunday");
    case 2:
        console.log("Today is Monday.");
    case 3:
        console.log("Today is Tuesday");
    case 4:
        console.log("Today is Wednesday");
    case 5:
        console.log("Today is Thursday");
    case 6:
        console.log("Today is Friday");
    case 7:
        console.log("Today is Saturday");
}
