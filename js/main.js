//jQuery ready section to refactor in later
// $(document).on('ready', function() {
//   console.log('sanity check!');
// });

//main javaScript functions
function calculate(){
  var enteredAmount = document.getElementById('amount').value.replace("$", "");
  var selected = document.getElementsByTagName('select')[0].selectedOptions;
  var num = Number(enteredAmount);
  var percent = Number(selected[0].value);
  var total = num * percent;
  return total;
}

//DOM functions

//changes the inner html of the result div to the tip amount
function writeAnswer(tipAmount){
  var answer = document.getElementById('result');
      result.innerHTML = "You should tip $" + tipAmount.toFixed(2);
}


document.getElementById("calculate").addEventListener("click", function(){
  var result = calculate();
  writeAnswer(result);
});


//calling functions
