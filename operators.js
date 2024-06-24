/**
 * a.mathematical Operators
 * +,-,*,/,%
 * b.Increment or decrement Operators
 *  ++, --
 * c.string/concatination 
 * d. Assignment Operators
 * =, +=, -=, *=, /=, %=
 * e. Assignment Operators
 * f. Logical Operators
 * g. conditional or ternary Operators
 * (exp) ? true: false
 * h. spread and rest operators
 *  ...
 * i. Template literals
 * `${}`
 */ 
let a = 10;
let b =3;
let c = a/b; //3.3333333
let d = a% b; // 1 remainder
//a=10
a = a+ 1 
// a=13
a++
++a
console.log(a++) // post assign // print =>increment => assign -> output:13, value:14
console.log(++a) // pre assign // output:15, value:15 increment =>assign=>print

let x = 10; 
let y = '10' // string 

let z = x + y // output error, 1010, "10", 10"10"

console.log("sum of x and y is:", z)
// number + string

let name = "Sandesh"
let  lastName ="Chaudhary"
// name = name + lastName // string + string 

name += lastName
 console.log(name) // Sandesh Chaudhary 

 x = 10
 y = '10'
 console.log(x<=y) // true
 console.log(x==y) // true
 console.log(x===y) // false
 console.log(x !== y) //true
 console.log(x !=y) //false

console.log((x<=y) && (x==y))
console.log((x===y) || (x==y))

console.log(!(x<=y))

console.log((x>10)? "x is greater than 10" : " x is less than or equal to 10") // x is less  than or equal to 10 

const studentsName = [ "student 1", "student2"]
console.log(... studentsName)
const user ={
    name : "Sandesh Chaudhary",
    email: "ranasiyaram6194@gmail.com",
    address : " kathmandu"

}

const admin ={
    ...user,
    section: "A"

    

}

console.log(admin)
// object destruction

