function run() {

// 1

    console.log("\n*****EXERCISE 1*****");
//a
    const names = ["Hassan", "John", "Peter", "Janne", "Frederik"]; // name array
    console.log("INITIAL NAME ARRAY");
    console.log(names);
    const filteredNames = names.filter(name => name.includes("a"));
    console.log("FILTERED TO NAMES CONTAINING a USING FILTER");
    console.log(filteredNames)

//b
    let reverse = function (str) {
        let buildString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            buildString += str[i];

        }
        return buildString;
    }
    const reversedNames = names.map(name => reverse(name));
    console.log("REVERSED ARRAY USING MAP")
    console.log(reversedNames);


// 2
    console.log("\n*****EXERCISE 2*****");
//a
    function containsAOrA(str) {
        return str.includes("A") || str.includes("a");
    }


    function myFilter(array, callBack) {
        for (let i = 0; i < array.length; i++) {
            if (!callBack(array[i])) {
                array.splice(i, 1);
                i--;
            }
        }
        return array;
    }

    let myFilterArray = myFilter(names, containsAOrA);
    console.log("FILTERED WITH myFilter")
    console.log(myFilterArray);

//b

    const names2 = ["Hassan", "John", "Peter", "Janne", "Frederik"]; // name array

    function myMap(array, callBack) {
        for (let i = 0; i < array.length; i++) {
            array[i] = callBack(array[i]);
        }
        return array;
    }

    let myMapArray = myMap(names2, reverse)
    console.log("MAPPED WITH myMap")
    console.log(myMapArray);


    function myFilter2(callBack) {
        for (let i = 0; i < this.length; i++) {
            if (!callBack(this[i])) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;

    }

    function myMap2(callBack) {
        for (let i = 0; i < this.length; i++) {
            this[i] = callBack(this[i]);
        }
        return this;


    }

//3
    console.log("\n*****EXERCISE 3*****");
    Array.prototype.myFilter = myFilter2;
    Array.prototype.myMap = myMap2;


    const names3 = ["Hassan", "John", "Peter", "Janne", "Frederik"];
    const filteredNames3 = names3.myFilter(containsAOrA);
    console.log("FILTERED WITH myFilter2 using prototype addition");
    console.log(filteredNames3);

    const names4 = ["Hassan", "John", "Peter", "Janne", "Frederik"];
    const mappedNames4 = names4.myMap(reverse);
    console.log("MAPPED WITH myFilter2 using prototype addition");
    console.log(mappedNames4);


// 4
    function printAsync(data, delay) {
        setTimeout(() => console.log(data), delay);

    }

    function exercise4() {
        let str1 = "I was printed by the VERY FIRST statements in the code, but delayed 4 seconds";
        let str2 = "I am the VERY first thing you will see";
        let str3 = "I should be printed by the VERY LAST statement in the code";
        let str4 = "I was delayed 2 seconds before I printed this";
        let str5 = "I was delayed 3 seconds before I printed this";
        printAsync(str1, 4000);
        printAsync(str2, 0);
        printAsync(str3, 5000);
        printAsync(str4, 2000);
        printAsync(str5, 3000);



    }
    //exercise4();

    // 5

    function exercise5() {

        console.log("\n*****EXERCISE 5*****");
//a

        let boys = ["Peter", "lars", "Ole"];
        let girls = ["Janne", "Hanne", "Sanne"];
        console.log("Boys =")
        console.log(boys);
        console.log("Girls =");
        console.log(girls);
//b

        let all = boys.concat(girls);

        console.log("CONCATINATED ARRAY OF boys + girls");
        console.log(all);
//c
        let allComma = all.join(",");
        console.log("all ARRAY SEPARATED WITH COMMA");
        console.log(allComma);
        console.log("all ARRAY SEPARATED WITH HYPHEN");
        let allHyphen = all.join("-");
        console.log(allHyphen);
//d

        all.push("Lone", "Gitte");
        console.log("all ARRAY WITH LONE + GITTE ADDED AT END");
        console.log(all);
//e
        all.unshift("Hans", "Kurt");
        console.log("all ARRAY WITH HANS + KURT ADDED AT START");
        console.log(all);
//f
        all.shift();
        console.log("FIRST REMOVED -");
        console.log(all);
//g
        all.pop();
        console.log("LAST REMOVED -");
        console.log(all);
//h
        all.splice(all.indexOf("Ole"), 2);
        console.log("OLE AND JANNE REMOVED WITH SPLICE METHOD")
        console.log(all);

//i
        all.reverse();
        console.log("ARRAY REVERSED");
        console.log(all);
//j
        all.sort();
        console.log("ARRAY SORTED NATURAL ORDER");
        console.log(all);

//k
        function mySort(array) {

            const y = array.map(name => name.substr(0, 1).toUpperCase() + name.substr(1));
            y.sort();

            return y;

        }

        let mySortedArray = mySort(all);
        console.log("SORTED USING mySort");
        console.log(mySortedArray);

//l
       let upperCaseArray = mySortedArray.map(x => x.toUpperCase());
        console.log("ALL CAPS ARRAY");
        console.log(upperCaseArray);

//m
        let arrayWithIandL = upperCaseArray.filter(x => x.substr(0,1) === "L" || x.substr(0,1) === "I");
        console.log("ARRAY WITH L AND I");
        console.log(arrayWithIandL);

//extra

        let upperCaseArrayTestOwnMap = mySortedArray.myMap(x => x.toUpperCase());
        console.log("USING SELF-MADE myMap METHOD");
        console.log(upperCaseArrayTestOwnMap);

        let arrayWithIandLTestOwnFilter = upperCaseArray.myFilter(x => x.substr(0,1) === "L" || x.substr(0,1) === "I");
        console.log("USING SELF-MADE myFilter METHOD");
        console.log(arrayWithIandLTestOwnFilter);

    }
    exercise5();


    function exercise7() {

        console.log("\n*****EXERCISE 7*****");
        let all = ["Lars", "Peter", "Jan", "Bo"];
//a
        let y = all.join(",");
        let x = all.join("#");
        let z = all.join(" ");
        console.log(y);
        console.log(x);
        console.log(z);

//b
        const numbers = [2, 3, 67, 33];

        let sum = numbers.reduce((prev, cur) => prev + cur);
        console.log("SUM OF NUMBER ARRAY");
        console.log(sum);

        const members = [
            {name : "Peter", age: 18},
            {name : "Jan", age: 35},
            {name : "Janne", age: 25},
            {name : "Martin", age: 22},
        ];

        let init = 0;
        let avgAge = members.reduce((prev, cur, index) => {
            if (index === members.length -1) {
                return (prev + cur.age) / members.length;
            } else {
                return (prev + cur.age);
            }
        }, init);
        console.log("AVERAGE AGE OF MEMBER ARRAY");
        console.log(avgAge);



    }
    exercise7();



}
run();







