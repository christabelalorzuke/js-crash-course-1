// declaring a variable
// keyword identifier/variableName = value
var firstName ="Christabel";
let lastName = "Alorzuke";
let age = 27;

// boolean declaration- use is in declaring
let isMarried = true;

// declaring an array- use [] indeclaring arrays
let children = ["Bright","Simion","patrick"]

// declaring an object
let other ={
    favoritesports:"soccer",
    favoritecolor:"Gold",
    favoriteFruit:"Apple",
};

const fullName = firstName + " " + lastName;// concatenation
const myself = `My name is firstName ${firstName} ${lastName}`;
console.log(myself);

// declaring strings
let sentence = "Christabels tech Journey on Premest";
// using lenghth

console.log(sentence.length);
console.log(sentence.split("Journey"))
console.log(sentence.replace("Christabels","Jennifers"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.startsWith("C"));
console.log(sentence.endsWith("H"));
console.log(sentence.includes("you"))

//ARRAYS

const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

console.log(days.shift());console.log(days.length); 
days.push("Friday");
console.log(days);
console.log(days.pop())
days.unshift("sunday");
console.log(days);

console.log(days.indexOf("Wednesday"));
console.log(days[5]);
days[1]="Sunday"
console.log(days);

//OBJECT
let person ={
    firstName: "Christabel",
    lastName: "Alorzuke",
    age:"21"
}
console.log(person["age"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

