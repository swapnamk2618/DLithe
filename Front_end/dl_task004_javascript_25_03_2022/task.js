//calculator using constructor//

function Calculator() {
  this.num1 = 0;
  this.num2 = 0;
  this.read = function () {
    this.num1 = +prompt("num1:");
    this.num2 = +prompt("num2:");
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calculator = new Calculator();
calculator.read();
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
/********************************************************** */

//task4 simple calculator add and multiplication in console //
let cal = {
  num1: 0,
  num2: 0,

  read: () => {
    this.num1 = parseInt(prompt("Enter the first number "));
    this.num2 = parseInt(prompt("Enter the second number "));
    console.log(this.num1, this.num2);
  },
  add: () => {
    let addition = this.num1 + this.num2;
    console.log("addition:" + addition);
  },
  mul: () => {
    let multification = this.num1 * this.num2;
    console.log("multiflication" + multification);
  },
};
cal.read();
cal.add();
cal.mul();
/***************************************************************************************************** */

//task5-ladder object go up down//
let ladder = {
  step: 1,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

// ladder.up().up().down().showStep().down().showStep(); // shows 2 then 1
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up();
// ladder.showStep();
/********************************************************************************************************* */

/******************************************************************************************************* */

//task2(total salary)//
let salaries = {
  john: 1200,
  peter: 2000,
  swapna: 5000,
  any: 3000,
};
let sum = 0;
for (let sal in salaries) {
  sum += salaries[sal];
}
console.log("sum :", sum);
/*************************************************************************************************** */

//task3 multiple no by 2//

let pageInfo = {
  width: 500,
  height: 800,
  title: "my pages",
};

let total_sum = 0;
for (let amount in pageInfo) {
  if (typeof pageInfo[amount] == "number") {
    pageInfo[amount] += 2;
  }
}
console.log("total amount:", total_sum);
console.log(pageInfo);
