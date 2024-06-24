/**
 *  1 Decision making statements
 * -if-else
 * -else-if 
 * -switch-case
 * 2 Iterations or loops
 * - do-while loop
 * -while
 * -for
 * -for-of
 * -for-in
 */

let x = 10;
// x > 10
if(x >= 10) {
    if(x<=30){
        //30 >=x>= 10
    }
} else {
    // optional
}

// create an object named student 
// assigning name, email, marksobt as number to the object 
//calculating percantage if totalscore is 500
// print the division based one the percentage 
// Given
// percentage >=80 => Distinction
// percentage >=60 but <80 => First division
// percentage >=45 but <60 => second division
// percentage >=35 but <45 => third division
// percentage >=35  => Sorry you are failed


let student =[{
    name: "Sandesh",
    email:"sandesh2@gmail.com",
    marks:300
}]
let totalscore = 500;
let percantage = (student[0].marks/totalscore)*100
console.log(percantage)

if(percantage>=80){
    console.log("Distinction")
}
else if( percantage >=60 && percantage < 80){
 
    console.log("second divison")
}
else if( percantage >=45 && percantage < 60){
    console.log("second division")

}
else if( percantage >=35 && percantage <45 ){
    console.log("third division")
}
else{
    console.log("Sorry you are failed")
}
 
// task 1
// calculate total bill to be paid by a house hold if electricity consumed for a month is 350 units
// given
// for the first 20 units, a lumpsum amount of NPR. 80 has to be paid 
// for the next 20 units the rate is Npr. 5/unit
// for the next 30 units the rate is Npr. 7/unit
// for the next 50 units the rate is Npr. 10/unit
// for the next 100 units the rate is Npr. 15/unit
// any units above this, the rate is Npr. 20/unit

// 20 => 80, units 330 
// 20 => 20 *5 , units 310
// 30 = 30 * 7, units 280
// 50 = 50 * 10 , units 230
// 100 = 100 * 15, units 130
// 130 = 130 * 20 

// task 2 
// calculate 
// a. Annual salary after tax
// b. Monthly salary after tax
// c. Annual tax to be paid
// d. Monthly tax to be paid 
// Consider a software Developer earns- 5000000 yearly before tax.
// Given the tax brackets
//if annual income is less than 500000 => tax
//if annual income is 200000 more, => tax = 15%
//if annual income is  300000 more, => tax = 20%
// if annual income is 1000000 more, => tax = 30 %
// above any of three mentioned , more => tax = 36%
//  500000 ==> 1 % => 5000 yearly tax
// 5000/12 => monthly tax
// 500000 - 5000 => 495000 => yearly salary 

/** 
 let salary =5000000
 let tax = 0

 if(salary>0 && salary <=500000){
    tax = 500000*1/100
 }
 else if( salary >= 200000 ){
    tax= 5000 + 200000*15/100
 }
 else if( salary >= 300000 ){
    tax= 5000 + 200000*15/100 + 300000*20/100
 }
 else if( salary >= 1000000 ){
    tax= 5000 + 200000*15/100 + 300000*20/100 + 1000000*30/100
 }
 else {
    tax
 } 
*/

/**const salary = 5000000
let taxAnnual = 0;
if(salary <=500000){
    taxAnnual = salary * 0.01
}else if(salary <= 700000){
    taxAnnual = 500000 * 0.01 + (salary - 500000)*0.15
}else if(salary <= 1000000){
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + (salary - 700000)* 0.20
}else if(salary <= 2000000){
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + ( salary - 2000000) * 0.30
} else {
    taxAnnual = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.20 + 1500000 * 0.30 + (salary - 3500000)*0.36
}
console.log("Annual Tax: Npr", taxAnnual)
*/



// Switch Case
let day = 0;
switch(day){
    case "Sunday":
        console.log("holiday")
        break;
     case "Saturday":
        console.log("holiday")
        break;
     case "Friday":
        console.log("Weekend")
        break;
    default:
        //optional  
        console.log("Weekday")
        break; // optional
}

// loop iterate
// dowhile
// while
// for 
// for-of
// for-in
// .map, .filter, .forEach, .reduce, .some, .each, .every

// do wbhile 

let i = 1;
do{
    console.log(i) //1
    i++ //2

}while(i<=10) // 2<=10,true
//exit


for(i=1;i<=10; i++){
    console.log(i)
    i++
}
