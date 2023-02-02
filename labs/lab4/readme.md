# Lab 4 - Arithmetic Calculator using DOM
Write JavaScript code for a calculator that can perform addition, subtraction, multiplication, and division.
Instead of `prompt` and the `console` functions to read input and display output, we will use the DOM for input and output.

## Demo
https://subtle-beignet-6e9d35.netlify.app/q1/

## Incomplete Solution
Here is the HTML code
```html
<!DOCTYPE html>
<html>

<head>
  <title>JavaScript Calculator</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="index.js"></script>

</head>

<body>
  <div id="calculator">
    <input type="text" id="operand1">
    <input type="text" id="operand2">
    <button id="addBtn"> + </button>
    <button id="subBtn"> - </button>
    <button id="mulBtn"> * </button>
    <button id="divBtn"> / </button>
    <p id="result">result</p>
  </div>


</body>

</html>
```
and JS:
```js
function addF() {
  x = jQuery('#operand1').val();
  y = jQuery('#operand2').val();
  console.log(x);
  console.log(y);
  jQuery('#result').html(Number(x) + Number(y));
}

function setup() {
  console.log('setup');
  $('#addBtn').click(addF);
  $('#subBtn').click(addF);
  $('#mulBtn').click(addF);
  $('#divBtn').click(addF);
}

jQuery(document).ready(setup)
```
## Deliverables
Submit a Netlify link

## Challenges
- Implement the power math functionality. For example 2^3 = 8
- Try to repeat the 2nd part of lab3, the stars labwork, using jQuery. Read the number of the triangle rows from the user using an input field and output the triangle to an html element, like a paragraph. 

