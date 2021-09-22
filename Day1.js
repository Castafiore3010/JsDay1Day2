// 1
function add(n1, n2) { // add two
    return n1 + n2;
}

const subtract = function (n1, n2){ // subtract two
    return n1 - n2;
}
const mul = function (n1, n2) { // divide two
    return n1 / n2;
}

// 3
const callBack = function (n1, n2, callBack) { // function as parameter example
    if (typeof n1 === "number" && typeof callBack === "function") {
        return "Result from the two numbers : " + n1 + "+" + n2 + "=" + callBack(n1, n2);
    } else {
        try {
            throw new Error("callBack has to be a function") // throw exception
        } catch (e) {
            console.error(e.name + ': ' + e.message);
            return null;
        }

    }

}



//2
console.log(add(1,2)); // 3
console.log(add); // [Function: add]
console.log(add(1, 2, 3)); // ignoring last input
console.log(add(1)); // NaN
console.log(callBack(3, 3, add)); // function passed as parameter
console.log(callBack(4, 3, subtract)); // same as above // wrong "+"
console.log(callBack(3,3,add())); // throws exception and returns null
console.log(callBack(3, "hh", add)); // concat instead of addition because of flexible types

//4
console.log(callBack(8, 2, mul)); // division
//5
console.log(callBack(8, 2,  function (n1, n2) { return n1 / n2} )); // same as above with anon func
//6
const arraytest = ["Lars", "Jan", "Peter", "Bo", "Frederik"]; // name array
const filteredArray = arraytest.filter(name => name.length <= 3); // filtered array with names 3 letters or less

console.log(arraytest)
console.log(filteredArray);

// 7
const upperCased = arraytest.map(name => name.toUpperCase()); // all names to upperCase
console.log(upperCased);

// 8
function htmlCreator1(array) { // method to return a html string
    let ul1 = "<ul>"; // front
    let ul2 ="</ul>"; // end
    let x = array.map(name => "<li>" + name + "</li>"); // wrap all elements in array in <li> </li>
    let y = ""; // empty string to build on
    x.forEach(name => y += name); // build string

    return ul1 + y + ul2; // return string + wrapping
}

console.log(htmlCreator1(arraytest));

// 9
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// newer than '99
console.log("CARS NEWER THAN '99");
console.log(cars.filter(element => element.year > 1999));
// all volvos
console.log("ALL VOLVOS");
console.log(cars.filter(element => element.make === "Volvo"))
// price below 5000
console.log("CARS WITH PRICE BELOW 5000");
console.log(cars.filter(element => element.price < 5000));

// 9a

function sqlCreator(array) { // sql expression creator method
    let whyIsUred = "INSERT ";
    let whyUDoDis = "INTO ";
    let sqlStr = whyIsUred + whyUDoDis + "cars (id, year, make, model, price) VALUES "; // standard sql string
    let helpArray = array.map(x => sqlStr + "(" +x.id+", "+x.year+", " + "'"+x.make+"'"+", " + "'"+x.model+"'" + ", " +x.price+ ");"); // map all values
    let returnStr = ""; // empty string to build
    helpArray.forEach(x => returnStr += (x + "\n")); // build string
    return returnStr;

}
let x = sqlCreator(cars)
console.log(x);


// 10

var msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
//console.log("aaaaaaaaaa"); // 1st
//msgPrinter ("bbbbbbbbbb",2000); // 5th
//console.log("dddddddddd"); // 2nd
//msgPrinter ("eeeeeeeeee",1000); // 4th
//console.log("ffffffffff"); // 3rd


// 11

const person = {name : "Harold", age: 60, hobby : "Memes", email: "HaroldHaroldo@gmail.com" };

for (x in person) {
    console.log(x+ ":", person[x]);
}

delete person.age;

console.log("\n")
for (x in person) {
    console.log(x + ":", person[x]);
}

person["height"] = 180;

console.log("\n")
for (x in person) {
    console.log(x+ ":", person[x]);
}







