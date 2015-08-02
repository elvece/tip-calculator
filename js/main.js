//DOM functions

//adds button click functionality to run the calculate and writeAnswer functions after getting the value from the text input field and the dropdown menu
document.getElementById("calculate").addEventListener("click", function(){

  var enteredAmount = document.getElementById('amount').value.replace("$", "");

  var selected = document.getElementsByTagName('select')[0].selectedOptions[0].value;

  var answer = document.getElementById('result');

  result.innerHTML = "You should tip $" + Number(calculate(enteredAmount, selected)).toFixed(2);
});



//jQuery ready section to refactor in later
// $(document).on('ready', function() {
//   console.log('sanity check!');
// });
