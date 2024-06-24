// task 1
// calculate total bill to be paid by a house hold if electricity consumed for a month is 350 units
// given
// for the first 20 units, a lumpsum amount of NPR. 80 has to be paid 
// for the next 20 units the rate is Npr. 5/unit
// for the next 30 units the rate is Npr. 7/unit
// for the next 50 units the rate is Npr. 10/unit
// for the next 100 units the rate is Npr. 15/unit
// any units above this, the rate is Npr. 20/unit

let units = 350
let bill = 0
if(units> 0 && units<=20){
    bill=80
}
else if(  units>=20 && units<=40){
    bill=80 + (units-20)*5
}
else if( units >=40 && units<=70 ){
    bill= 80 + 20*5 + (units-40)*7

}
else if( units >=70 && units<=120){
    bill= 80 + 20*5 + 30*7 + (units-70)*10

}
else if( units >=120 && units<=220){
    bill= 80 + 20*5 + 30*7 + 50*10 + (units-120)*15

}
else if(units>220) {
    bill= 80 +20*5 + 30*7 +  50*10 + 100*15 + (units-220)*20

}
console.log("Total bill to be paid by a house hold if electricity consumed for a month is " + bill)