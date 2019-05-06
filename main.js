///creating a global variable for the tiger count
var tigerCount;
var jungle = [];


//creating a parent animal class.  it has a name, energyLevel, and a sleepState;

class Animal {
    constructor(name) {
      this.name = name;
      this.energyLevel = 0;
      this.sleepState = false;
      jungle.push(this);
    }
    eat(foodType) {
        this.energyLevel = this.energyLevel + 5;
        console.log("The animal ate "+ foodType + " and energy should have increased by 5")
        console.log(this.energyLevel);
    }
    sleep() {
        this.sleepState = true;
        this.energyLevel = this.energyLevel + 10;
        console.log(this.name + " is going to sleep and the energy level is now " + this.energyLevel);
    }
    wakeUp() {
        this.sleepState = false;
        console.log(this.name + " is waking up")
    }
  }

//creating a Tiger which is an extension of the animal class
  
 class Tiger extends Animal {
    constructor(name){
        super();
        this.name = name;
        Tiger.numInstances = (Tiger.numInstances || 0) + 1;
    }
    sleep() {
        this.sleepState = true;
        this.energyLevel = this.energyLevel + 5;
        console.log(this.name + " is Going to sleep");
        console.log(this.name+" the Tiger's current energy level is "+ this.energyLevel);
    }
    makeSound() {
        this.energyLevel = this.energyLevel -3;
        console.log("The tiger named " + this.name + " let out a ROOOOOAR");
        console.log(this.name+" the Tiger's current energy level is "+ this.energyLevel);
    }
    eat(foodType) {
        if (foodType == "meat" || foodType =="fish" || foodType == "bugs") {
           this.energyLevel = this.energyLevel + 5;
            console.log(this.name + " the tiger ate "+ foodType + " and energy should have increased by 5")
            console.log(this.name+" the Tiger's current energy level is "+ this.energyLevel);
        } else if (foodType == "grain") { console.log (this.name + " tried to eat "+ foodType +" and failed.")}
    }

 } 

 // creating a monkey
class Monkey extends Animal {
    constructor(name){
        super();
        this.name = name;
        Monkey.numInstances = (Monkey.numInstances || 0) + 1;
    };
    eat(foodType) {
        this.energyLevel = this.energyLevel + 2;
        console.log("The monkey ate "+ foodType + " and energy should have increased by 2")
        console.log("The monkey's current energy is " + this.energyLevel);
    }
    makeSound() {
        this.energyLevel = this.energyLevel -4;
        console.log("The monkey named " + this.name + " let out a loud screech OOOOOOOOOO");
        console.log(this.name+" the Monkey's current energy level is "+ this.energyLevel);
    }
    play(){
        if (this.energyLevel > 8) {
            this.energyLevel = this.energyLevel - 8;
             console.log("The monkey let out a loud sound" + " OOOOO OOOOOOO OOOOO")
             console.log("The current energy level for this monkey is " + this.energyLevel);
         } else if (this.energyLevel < 8) { console.log ("This monkey is too tired")}
     }
    
}
 // creating a snake
class Snake extends Animal {
    constructor(name){
        super();
        this.name = name;
        Snake.numInstances = (Snake.numInstances || 0) + 1;
    }
    makeSound() {
        this.energyLevel = this.energyLevel -3;
        console.log("The shnake named " + this.name + " let out a loud screech TSSSSSSKKKKK");
        console.log(this.name+" the snake's current energy level is "+ this.energyLevel);
    }
}


chester1 = new Tiger("chester1");
chester2 = new Tiger("chester2");
chester3 = new Tiger("chester3");



chester1.eat("bugs");
chester2.eat("grain");
console.log("Current count of tiger instances is " + Tiger.numInstances);
console.log("Current energy level of one tiger is " + chester1.energyLevel);

chimp1 = new Monkey("chimp1");
console.log("Current count of Monkey instances is " + Monkey.numInstances);
chimp1.sleep();
chimp1.play();
chimp1.play();

slytherin = new Snake("slytherin");

chester1.makeSound();
chester2.makeSound();
chimp1.makeSound();
slytherin.makeSound();








// pokey.eat("meat");
// pokey.makeSound();
// pokey.sleep();
// jasper.eat("meat");

// let pokeyStore = `${jungle[0].name}`
// console.log("Pokey Store = " + pokeyStore);
// pokeyStore.eat("meat");

// console.log(Tiger.numInstances);
// console.log(jungle);
// jungle.forEach(eat);
// console.log(Animal);




// var soundOff = function () {
//     let objName = jungle[0].name;
//     objName.makeSound();
//     console.log("Testing sound off");
// };

// soundOff();




//   // Inherit from Animal by specifying "extends Animal"
//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
  
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!



// class Tiger {
//     constructor(name,energyLevel) {
//         this.name = name;
//         this.energyLevel=energyLevel;
//         this.energyLevel = 0;
//         console.log("Starting energy level is " + this.energyLevel)
//         Tiger.numInstances = (Tiger.numInstances || 0) + 1;
//     }

//     eat(foodType) {
//         if (foodType == "meat" || foodType =="fish" || foodType == "bugs") {
//            this.energyLevel = this.energyLevel + 5;
//             console.log("The tiger ate "+ foodType + " and energy should have increased by 5")
//             console.log(this.energyLevel);
//         } else if (foodType == "grain") { console.log ("Eww tigers dont eat grain bro")}
//     }

//     makeSound() {
//         this.energyLevel = this.energyLevel + 10;
//         console.log("The tiger made a roaring sound and should have had the energy increase by 10!" + this.energyLevel);
//     }

  
// }

// const tiger1 = new Tiger("pokey");
// const jeffrey = new Tiger("jeffrey");


// jeffrey.eat("meat");
// tiger1.eat("grain");

// console.log(Tiger.numInstances);
// tigerCount = Tiger.numInstances;
// console.log(tigerCount);


// class Car {
//     constructor(color, maxSpeed, accelerationRate) {
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.accelerationRate = accelerationRate;
//     }

//     stop() {
//         this.speed = 0;
//     }

//     accelerate() {
//         if (this.speed < this.maxSpeed) {
//             this.speed += this.accelerationRate
//         }
//     }

// }

// const clunker = new Car('blue', 65, 5);
// const auto = new Car('black', 140, 10);
// const bugatti = new Car('white', 260, 20);
// const miata = new Car('yellow', 90, 15);

// console.log(clunker);
// console.log(auto);
// console.log(bugatti);
// console.log(miata);