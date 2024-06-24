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

let student = [{
    name: "umesh",
    email:"umeshchy@gmail.com",
    marks:300
}]

let totalscore = 500;
let percantage =(student[0].marks/totalscore)*100
console.log(percantage)
switch(true){
    case (percantage>=80):
    console.log("Distinction");
    break;
    case ( percantage >=60 && percantage < 80):
    console.log("First Division");
    break;
    case ( percentage >=45 && percentage < 60):
    console.log("Second Division");
    break;
    case( percantage >=35 && percantage < 45):
    console.log("Third Division");
    break;
    default:
    console.log("Sorry you are failed");
    break;
}