// Assignment code here
// GIVEN I need a new, secure password:

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '/', '"', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get references to the #generate element
// DOM traversal: the word document refers to html. The query selector searches selector
// "In HTML search for a element with an id of generate"
var generateBtn = document.querySelector("#generate");


//Must add a function called generatePassword since it is refereced in the function writePassword
// Add meat here
function generatePassword() {
  // 2. THEN I am presented with a series of prompts for password criteria
  // 3. WHEN prompted for password criteria
  // 4. THEN I select which criteria to include in the password

  // 5. WHEN prompted for the length of the password
  // 6. THEN I choose a length of at least 8 characters and no more than 128 characters "128"  128

  // Used parseInt to convert a string into a number because in the if statement below we are trying to compare passwordLengthPrompt to numbers like 8 and 128 but passwordLengthPrompt is a prompt (string)
  var passwordLengthPrompt = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"))
  console.log(passwordLengthPrompt)
  //Must add conditional to ensure password length is between 8-128 characters.
  // if (passwordLengthPrompt < 8) {
  //   alert("Try typing in a larger positive integer. Make sure its between 8 - 128. ");
  //   console.log("less than 8");
  // }else if (passwordLengthPrompt > 128) {
  //   alert("Try typing in a smaller positive integer. Make sure its between 8 - 128. ");
  //   console.log("more than 128")
  // // NaN = Not a real number
  // }else if (isNaN(passwordLengthPrompt)){
  //   alert("Oops, thats not a real number. Lets try a positive integer between 8 - 128. ");
  //   console.log("not a number")
  // }else{
  //   alert("Type in a positive integer between 8 - 128.");
  // }
  if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128 || isNaN(passwordLengthPrompt)) {
    alert("Try typing in a positive integer. Make sure its between 8 - 128 and make sure its a number")
    return null
  }


  // 7. WHEN asked for character types to include in the password
  // 8. THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var wantLowerCase = confirm("Would you like to include lower case characters in your password?");
  console.log(wantLowerCase);

  var wantUpperCase = confirm("Would you like to include upper case characters in your password");
  console.log(wantUpperCase);

  var wantNumeric = confirm("Would you like to include numbers in your password?");
  console.log(wantNumeric);

  var wantSpecalCharacters = confirm("Would you like to include special characters in your password?");
  console.log(wantSpecalCharacters);


  // 9. WHEN I answer each prompt (says prompt but we are refering to the (confirm) items in part 8))
  // 10. THEN my input should be validated and at least one character type should be selected
  var characters = [];
  var password = '';

  if (!wantLowerCase && !wantUpperCase && !wantNumeric && !wantSpecalCharacters) {
    alert("at least one character type should be selected")
    return null
  }

  if (wantSpecalCharacters) {
    characters = characters.concat(specialCharacters);
  }

  if (wantNumeric) {
    characters = characters.concat(numericCharacters);
  }

  if (wantLowerCase) {
    characters = characters.concat(lowercaseCharacters);
  }

  if (wantUpperCase) {
    characters = characters.concat(uppercaseCharacters);
  }

  // 11. WHEN all prompts are answered
  // 12. THEN a password is generated that matches the selected criteria
  // Must include a for loop to set up password based on if statement- must select one character randomly
  for (var i = 0; i < passwordLengthPrompt; i++) {
    const randomElement = characters[Math.floor(Math.random() * characters.length)];

    password = password += randomElement
  }


  // 13. WHEN the password is generated
  // 14. THEN the password is either displayed in an alert or written to the page

  return password

}



// Write password to the #password input
// This function presents a password - referenced below in generateBtn as the action that want to take place after the button is clicked
function writePassword() {
  //generatePassword () should have the ability to prompt for password criteria
  var password = generatePassword();
  //"variable passwordText is equal to the HTML lines that have the id= "password" ""
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// 1. WHEN I click the button to generate a password.....
// Add event listener to generate button
// "When "click" this button, run the function writePassword"
generateBtn.addEventListener("click", writePassword);


















