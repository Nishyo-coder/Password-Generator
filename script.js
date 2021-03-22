// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters for computer to pick from 
var characters = ["A", "B", "C", "D", "E", "F", "G", "H", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u","v","w", "x", "y", "z", "!", "&", "$", "%", "@", "*",
 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 console.log(characters);

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

//I want to select random ariables from my array of variables based off user choice

  passwordText.textContent = characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword() {

  var password = "";

  //Each line should say yes or no to the password criteria
  //click button; generate password
  //password length has to e 8-12 characters
  //character type1; lowercase
  //character type2; uppercase
  //character type3; numeric
  //character type4; special character

  //we have to validate that at least one was selected;  validate the > or = 1 to sign 
  //generate a password that includes selected criteria
  //
  
  // Computer prompts for user to create strong password (I got stuck here returning the variables chosen. Still working through my logic as written)
var userChoiceLength = window.prompt("How many characters in your password, must be between 8 and 12");

//If user chooses a number of password characters greater than 12 or less than 8

if (userChoiceLength > 12) {
  window.prompt("Password must have less than 12 characters!");
  return"";
}
  else if  (userChoiceLength < 8) {
     window.prompt("Password must have more than 7 characters!");
     return "";
}

// Computer confirms user character choices with prompts
var userChoiceUpper = window.prompt("Click OK to Include Uppercase letters");
var userChoiceUpper = confirm("Okay"); 
if (userChoiceUpper) {password === characters;
} else { 
    window.prompt("You sure?");
  }

var UserChoiceLower = window.prompt("Click OK to Include Lowercase letters");
var UserChoiceLower = confirm("Better");
if (UserChoiceLower) {password === characters;
} else {
  window.prompt("Bad Idea!");
}

var UserChoiceNumber = window.prompt("Click OK to Include Numbers");
var UserChoiceNumber = confirm("Solid");
if (UserChoiceNumber) {password === characters;
} else {
  window.prompt("You definitely should have a number!");
}

  var UserchoiceSpecialChar = window.prompt("Click OK to Include Special Characters letters");
  var UserchoiceSpecialChar = confirm("Strong"); 
  if (UserchoiceSpecialChar) {password === characters;
  } else { 
      window.prompt("I don't like them either");
    }
    }
    generatePassword(),

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);