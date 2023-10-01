// Assignment code here

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var specialCharacter = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '?',];
var wordLength = 8 >= 128;

function generatePassword() {

  var possibleCharacters = [];


   // Variables to store booleans regarding the inclusion of special characters and other criteria

  var length;
  while (true) {
    length = parseInt(prompt("How long would you like your password to be? MUST BE BETWEEN 8 & 128 CHARACTERS."));
    if (length >= 8 && length <= 128) {
      break;
    } else {
      alert("Password length must be between 8 and 128 characters.");
    }
  }


  var hasSpecialCharacters = confirm(
    "Click OK if you would like your password to contain special characters."
  );
  if (hasSpecialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
  }

  var hasUpperCase = confirm(
    "Would you like any UPPER CASE letters in your password?"
  );

  if (hasUpperCase === true) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }

  var hasLowerCase = confirm(
    "Would you like any lowercase letters in your password?"
  );

  if (hasLowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }

  var hasNumbers = confirm(
    "Would you like any numbers in your password?"
  );

  if (hasNumbers === true) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }

  if (possibleCharacters.length === 0) {
    alert('Please select at least one character type.');
    return '';
  }



  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
