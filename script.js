// Assignment code here

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numeric = ['0','1','2','3','4','5','6','7','8','9',];
var specialCharacter = ['~','!','@','#','$','%','^','&','*','_','-','+','=','?',];
var wordLength = 8;

function generatePassword (upperCase,lowerCase,numeric,specialCharacter,wordLength){

  console.log("Thank you for clicking the button!")




}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
{ 


}

// Write password to the #password input
function writePassword() {
  let generateBtn = prompt("Please enter an Upper Case letter!");
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
