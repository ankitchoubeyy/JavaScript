// ------- Object Literals -------------

const mySymbol = Symbol("Jai Hind");

let myBio = {
  name: "Ankit Choubey",
  age: 21,
  graduated: false,
  interest: "Devlopement",
  favSport: "Cricket",
  // Using Symbol
  [mySymbol]: "Key1", // Important for Interview prespective
};

// --------- Methods of Accesing Object values ------

// Method-I
console.log(myBio.age); //21
// Note -->> There is a problem in using this method. We will not able to acces the values those keys which are inside a " ". ex- "favSport"

// Method-II : To avoid the problems arises in Method-I.

console.log(myBio["interest"]);
console.log(myBio["favSport"]);
console.log(typeof myBio[mySymbol]);

// ------ To Change the Object values -------------

myBio["name"] = "Vishal Choubey"; // or myBio.name = "Ashish Choubey"
console.log(myBio);

// -------- To freeze Object to prevent changes ------------
Object.freeze(myBio); // No changes will be apply after this statement in this object
myBio.age = 19; //
console.log(myBio.age); // O/P :21 --->> No changes will be apply

// Singleton

// let newObj = new Object {
// } // This is known as singleton

// Accesign Object by usign keys and values
console.log(Object.keys(myBio));
console.log(Object.values(myBio));
console.log(Object.entries(myBio)); //Returns an array of key/values of the enumerable properties of an object

// To check the availablity of property use .hasOwnProperty() method
console.log(myBio.hasOwnProperty("name")); // true
console.log(myBio.hasOwnProperty("role")); // false

// ----------  Object Destructing -----------

let { name, age, favSport } = myBio; // --->> Properties can be assigned inside the curly braces and can be accesee directly

console.log(age); //21
console.log(favSport); // Cricket
