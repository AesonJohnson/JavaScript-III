/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default way to assign a variable/object globally.
* 2. Implicit binding assigns meaning to what's left of the dot of the function.
* 3. New binding creates a unique object which "this" points to.
* 4. Explicit binding assigns a specific value to "this" using call, apply, or bind.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function dog() {
    console.log(this.makeNoise);
}

var makeNoise = "woof!"

dog();

// Principle 2
// code example for Implicit Binding

let myDog={
    name: "Tilly",
    noise: "woof!",
    makeNoise: function () {
        console.log(this.noise)
    }
}

myDog.makeNoise();

// Principle 3
// code example for New Binding

function BestDog(name){
    this.name = name;
}

let myBestDog = new BestDog ("Tilly is the best dog in the world even though she ate my sandwich.");

console.log(myBestDog.name);

// Principle 4
// code example for Explicit Binding

function myDoggy() {
    console.log(this.makeNoise)
}

let myDoggy2 ={
    name: "Tilly",
    makeNoise: "woof!",
}

myDoggy.call(myDoggy2);