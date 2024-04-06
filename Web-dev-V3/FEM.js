const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "LD MAZZ D OSHOLE";
console.log(myName);

const firstName = "Esigie";
const lastName = "Emozozo";

const sentence = "Hello " + firstName + " " + lastName + "! how are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

// Control  Flow

const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The Sky is Blue!");
} else {
    console.log("The sky is .... not Blue");
}

//Loops

/* let friendsAtYourParty = 0;
while (friendsAtYourParty < 10 ) {
    friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty); */

// Functions

/* function addFive(number) {
    const someVariable = "You can't see me outside this function scope";
    return number + 5;
}

addFive(10);
console.log(someVariable); 

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i ++) {
    friendsAtYourParty++;
}
console.log(i); 

const A = "A";
let F;

function doStuff(B) {
    console.log(B);
    const C = "C";
    let H = "H";
    if (1 + 1 === 2 ) {
        const D = "D";
        H = "something else";
    }
    console.log(D);
    console.log(H);
    F = "F";
}

let E = 0;
while (E < 3) {
    E++;
    console.log(A);
    const G = "G";
}
console.log(E);
console.log(G);

doStuff("B");
console.log(B);
console.log(C);
console.log(F); */

// Objects

const person = {
    name: " Oshole Emozozo",
    city: "Abuja",
    state: "Edo",
    favoriteFood: "Bread",
    wantsTacosRightNow: true,
    numbersOfTacosWanted: 100,
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

const person1 = {
    name: "Akpos",
    ageRange: "25-35",
};

const person2 = {
    name: "Georgina",
    ageRange: "65-75",
};

function suggestMusic(person) {
    if (person.ageRange=== "25-35") {
        console.log(" We think you will like Daft Punk. ");
    } else if (person.ageRange === "65-75") {
        console.log("You are obviously going to like Johnny Cash. ");
    } else {
        console.log(
            "Uh, maybe try Michael Jackson?, Everyone likes Michael Jackson, right?"
        );
    }
}

suggestMusic(person1);
suggestMusic(person2);

const dog = {
    name: "dog",
    speak() {
        console.log("woof woof");
    },
};

dog.speak();

const me = {
    name: {
        first: "Mazz",
        last: "D",
    },
    location: {
        city: "Abuja",
        state: "Edo",
        country: "Nigeria",
        streetNumber: 50,
        street: "Sokale, Dutse",
        zipCode: "44444",
    },
    getAddress() {
        return `${this.name.first} ${this.name.last} ${this.location.streetNumber} ${this.location.street} ${this.location.city}, ${this.location.state} ${this.location.zipCode} ${this.location.country}`;
    },
};

console.log(me.getAddress());

console.log(me.name.first);
console.log(me.location.state);
/* Using the 'this' keyword to access keys and values in an object prototype is called *context* and the 'this' keyword is a trickish, complicated, difficult concept to grasp at 1st in the JS language
the 'this' keyword seem to function in the code block scope it is called or referenced, by becoming the object(not always true[this has to do with scoping, hoisting IMO] ) */

//Arrays

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);