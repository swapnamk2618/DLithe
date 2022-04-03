let operator = prompt("Enter operator between(+,-,*,/)");
let cnf = confirm("Are you sure the operator is valid");
if (cnf == true) {
  let num1 = parseInt(prompt("Enter first number"));
  let num2 = parseInt(prompt("Enter first number"));
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      alert(`${num1} + ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      alert(`${num1} - ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      alert(`${num1} * ${num2} = ${result}`);
      break;
    case "/":
      result = num1 / num2;
      alert(`${num1} / ${num2} = ${result}`);
      break;
    default:
      alert("Not a operator");
  }
}
/*************************************************************************************************************** */
//task

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}
