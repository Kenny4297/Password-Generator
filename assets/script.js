// Assignment code here

//This section 
const lowercaseLettersString = 'abcdefghijklmnopqrstuvwxyz';

const uppercaseLettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const numbersString = '1234567890';

const specialCharactersString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}";

//Functions to create a character and push to to the 'soon to be' password
const createLowercaseLetter = () => {
  let lowercaseLetter = Math.floor(Math.random() * lowercaseLettersString.length);
  solutionArray.push(lowercaseLettersString[lowercaseLetter]);
}

const createUppercaseLetter = () => {
  let uppercaseLetter = Math.floor(Math.random() * uppercaseLettersString.length);
  solutionArray.push(uppercaseLettersString[uppercaseLetter]);
}

const createNumber = () => {
  let numberChoice = Math.floor(Math.random() * numbersString.length);
  solutionArray.push(numbersString[numberChoice]);
}

const createSpecial = () => {
  let specialChoice = Math.floor(Math.random() * specialCharactersString.length);
  solutionArray.push(specialCharactersString[specialChoice]);
}

//Generate the password
const generatePassword = () => {
  solutionArray = [];
  count = 0
  while (count < passwordCriteria) {

      if(lowercasePrompt === 'yes' && count < passwordCriteria) {
        createLowercaseLetter();
        count++;
      } 

      if (uppercasePrompt === 'yes' && count < passwordCriteria){
        createUppercaseLetter();
        count++;
      } 

      if (numberPrompt === 'yes' && count < passwordCriteria) {
        createNumber();
        count++;
      } 

      if (specialCase === 'yes' && count < passwordCriteria) {
        createSpecial();
        count++;
      } 
      //He we check to see if the user decided he didn't want any characters in his/her password
      if (count === 0) {
        solutionArray = "You didn't select any prompts, so you end up with nothing";
        return solutionArray;
      }
  }
  return `Your new password is \n ${solutionArray.join('')}`;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  //Here we check for user client validation regarding the prompts 
  while (true) {
    passwordCriteria = prompt("How many characters would you like your password to be? Length must be between 8 and 128 characters long");
    console.log(`The passwordCriteria is ${passwordCriteria}.`)
    if (passwordCriteria >= 8 && passwordCriteria <= 128) {
      break;
    } else if (passwordCriteria === null) {
      break;
    } else {
      window.alert("Try again! The length needs to be more than 8 characters and less than 128!");
    }
  }

  while (true) {
    lowercasePrompt = prompt("Would you like to use lower case letters?").toLowerCase();
    console.log(`The lowercase prompt is ${lowercasePrompt}`);
    if (lowercasePrompt === 'yes' || lowercasePrompt === 'no') {
      break;
    } else if (lowercasePrompt === null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }

  while (true) {
    uppercasePrompt = prompt("Would you like to use uppercase letters?").toLowerCase();
    console.log(`The uppercase prompt is ${uppercasePrompt}`);
    if (uppercasePrompt === "yes" || uppercasePrompt === "no") {
      break;
    } else if (uppercasePrompt == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }

  while (true) {
    numberPrompt = prompt("Would you like to use numbers?").toLowerCase();
    console.log(`The number Prompt is ${numberPrompt}`);
    if (numberPrompt === "yes" || numberPrompt === "no") {
      break;
    } else if (numberPrompt == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }

  while (true) {
    specialCase = prompt("Would you like to use special characters?").toLowerCase();
    console.log(`The special case prompt is ${specialCase}`);
    if (specialCase === "yes" || specialCase === "no") {
      break;
    } else if (passwordCriteria == null) {
      break;
    } else {
      window.alert("Please enter either 'yes' or 'no'")
    }
  }

  console.log(generatePassword());
  var password = generatePassword();

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


