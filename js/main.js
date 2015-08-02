//jQuery ready section to refactor in later
// $(document).on('ready', function() {
//   console.log('sanity check!');
// });

//main javaScript functions
function calculate(){
  debugger;
  var enteredAmount = document.getElementById('amount').value;
  var selected = document.getElementsByTagName('select')[0].selectedOptions;
  var num = parseInt(enteredAmount);
  var percent = Number(selected[0].value);
  var total = num * percent;
  return total;
}

//DOM functions

//changes the inner html of the result div to the tip amount
function writeAnswer(tipAmount){
  var answer = document.getElementById('result');
      result.innerHTML = "$" + tipAmount.toFixed(2);
}


document.getElementById("calculate").addEventListener("click", function(){
  var result = calculate();
  writeAnswer(result);
});


//calling functions
