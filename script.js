// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters for computer to pick from 
var UpperChars = ["A", "B", "C", "D", "E", "F", "G", "H",]
var LowerChars = ["i", "j", "k", "l", "m", "n", "o", "p"]
var SpecialChars = ["!", "&", "$", "%",]
var Numbers =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var userChoiceLengthminimum = [8]
var userChoiceLengthMaximum = [12]
var UserChoiceNumber = String.Numbers
var userChoiceUpper = String.UpperChars
var UserChoiceLower = String.LowerChars
var UserchoiceSpecialChar = String.SpecialChars
var passwordChar = (userChoiceLengthMaximum, userChoiceLengthminimum, userChoiceUpper, UserChoiceLower, UserChoiceNumber, UserchoiceSpecialChar)

// Write password to the #password input
function writePassword(passedInVariable) {
  console.log ("In here")
  var passwordText = document.querySelector("#password");
  passwordText.textContent = passwordChar
  }

function generatePassword(passedInVariable){
  console.log ('passwordChar, PASSWORDCHAR')
  var password = "";
  var passwordChar= "";
  
  // Computer prompts for user to create strong password
var userChoiceLength = window.prompt("Choose a password length with 8-12 characters long");

//If user chooses a number of password characters greater than 12 or less than 8
if (userChoiceLength > 12) {
  window.prompt("Password must have less than 12 characters!");
  return"";
}
  else if  (userChoiceLength < 8) {
     window.prompt("Password must have more than 7 characters!");
     return "";
}

// Computer confirms character choices with prompts
var userChoiceUpper = window.prompt("Click OK to Include Uppercase letters");
var userChoiceUpper = confirm("Okay"); 
if (userChoiceUpper) {passwordChar === UpperChars;
} else { 
    window.prompt("You sure?");
  }

var UserChoiceLower = window.prompt("Click OK to Include Lowercase letters");
var UserChoiceLower = confirm("Better");
if (UserChoiceLower) {passwordChar === LowerChars;
} else {
  window.prompt("Bad Idea!");
}

//Confused why if my variable "numbers" is plural, then why must it be singular here. Must be bc it's integer.

var UserChoiceNumber = window.prompt("Click OK to Include Numbers");
var UserChoiceNumber = confirm("Solid");
if (UserChoiceNumber) {passwordChar === Number;
} else {
  window.prompt("You definitely should have a number!");
}

  var UserchoiceSpecialChar = window.prompt("Click OK to Include Special Characters letters");
  var UserchoiceSpecialChar = confirm("Strong"); 
  if (UserchoiceSpecialChar) {passwordChar === SpecialChars;
  } else { 
      window.prompt("I don't like them either");
    }
   
    for (var i = 0; i < userChoiceLength; i++) {
      password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
      }
      
    }
    generatePassword();
    writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
  event.preventDefault();
  })

  