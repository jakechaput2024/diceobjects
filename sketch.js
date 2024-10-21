let dice = [];
let numberOfDice = 6;
var gif1;
var gif2;
let gifvictory;
let total

function preload() {
  gif1 = loadImage("libraries/text.gif");
  gif2 = loadImage("libraries/oogieboogie.gif");
  gifvictory = loadImage("libraries/ngif.gif")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(50); // argument is the size of the die
  }
}

function draw() {
  background(168, 35, 25);
  
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
    

  }

  image(gif1, 100, 580)
  image(gif2, 600, 100)
  
  text("ROLL TO GET TO 30!", 200, 200) //instructions text
  fill(168, 35, 25)
  text("Total: " + total, width*4/5, 150);
  if (total >= 30) {
    image(gifvictory, 100, 100)
  }
  
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  total = 0;
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
    total += die.value;
  }
  
  console.log(list);
}