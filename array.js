// elements are stored in index value pair
// index always begins from 0 
// every elements in an array are being separted  by coma,
// An array can store any data type
// 0             1          2 ....
// [element1, element2, element3 ....]

let user_1 = ["Sandesh","binod","Mahesh","Sirjana","123" ]
console.log(user_1)
console.log(user_1[0])
console.log(user_1[1])
console.log(user_1[2])
console.log(user_1[3])


//let user_1_1 = new Array []
 
let user_obj_1 = {
    name: "Sandesh",
    email:"Sandesh@gmail.com",
    address:"Dhangadhi",
    phone: 9814686194
}

let user_obj_2 = {
    email:"Sanndesh@gmail.com",
    name:"Sandesh",
    address:"Dhangadhi",
    Phone: 9814686194
}
console.log(user_obj_1.name)
console.log(user_obj_2.name)
// email
// user_1[o]
// user_2[1]



// all user splice function
//push 
//pop

let num = [ 1,2,3,4]
let num_more = [ 11,12,13,14]
let newArray = num.concat(num_more)
console.log(num,num_more)

//Destructing Array
let user=["Innocent", 24, "Dhangadhi"]
let [name,age,city]=user
console.log("My name is a " +  name ) // + concat use

// Splice Array 

const numbers= [ 1,2,3,4,5];
const deleted = numbers.splice(1,2);
console.log(numbers);
console.log(deleted);



