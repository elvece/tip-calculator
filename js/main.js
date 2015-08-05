//DOM functions

//adds button click functionality to run the calculate and writeAnswer functions after getting the value from the text input field and the dropdown menu
// document.getElementById("calculate").addEventListener("click", function(){

//   var enteredAmount = document.getElementById('amount').value.replace("$", "");

//   var selected = document.getElementsByTagName('select')[0].selectedOptions[0].value;

//   result.innerHTML = "You should tip $" + Number(calculate(enteredAmount, selected)).toFixed(2);
// });



//jQuery ready section to refactor in later
$(document).on('ready', function() {
  // $('#calculate').on('click', function(){
    // var $enteredAmount = Number($('#amount').val().replace('$', ''));
    // var $selected = $('#percent:first-child :selected').val();
  //   $('#result').text("You should tip $" + calculate($enteredAmount, $selected));
  // });

  $('#calculate').hide();
  $('#amount').on('keyup', function(){
    var $enteredAmount = Number($('#amount').val().replace('$', ''));
    var $selected = $('#percent:first-child :selected').val();
    if ($selected !== "" && $enteredAmount !== 0){
      $('#result').text("You should tip $" + calculate($enteredAmount, $selected));
    }
    else{
      $('#result').text("");
    }
  });
});
//if bad amount, put something in result that says bad, also notify user that they need to select a tip amoutn first
