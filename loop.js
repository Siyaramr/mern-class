const students = [
{
    name: "Sandesh",
    email:"Sandesh@gmail.com",
    address:"Kathmandu",
    phone: 9814686194,
    marksObt: 300

},
{
    name: "Sirjana",
    email:"sirjana2@gmail.com",
    address:"Dhangadhi",
    phone: 98674556,
    marksObt:400
},
{
    name: "Siddhartha",
    email:"sk1@gmail.com",
    address:"biratnagar",
    phone: 9814686,
    marksObt:350
}
]

const size = students.length;
for(let i = 0; i < size; i++){
  //  let percantage = (students percantage.marksObt/500)*100
    console.log( "students name :", students[i].name)
    console.log( "students email :", students[i].email)
    console.log("students address :", students[i].address)
    console.log( "students phone :", students[i].phone)
   // console.log("student divsion:",  students[i].percantage)
}
