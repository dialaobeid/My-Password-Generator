// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // the function mentioned in above writePassword() which will generate password
  function generatePassword() {
    // Prompt for password length
    var passwordLength = window.prompt("Choose a valid password length between 8 and 128 characters:");

    // IF function to validate the password length
    passwordLength = parseInt(passwordLength);        // this ensures that the characters input are numbers
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a valid length between 8 and 128 characters.");
      return;
    }

    // Character criteria
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
    var specialChar = "!@#$%^&*()_-+=~`<>?/\|{}[]:;";

    // Prompt for valid characters
    var inputUpperCase = confirm("Include uppercase characters?");
    var inputLowerCase = confirm("Include lowercase characters?");
    var inputNumeric = confirm("Include numeric characters?");
    var inputSpecialChar = confirm("Include special characters?");


    // IF function to validate character criteria chosen 
    if (!inputUpperCase && !inputLowerCase && !inputNumeric && !inputSpecialChar) {
    alert("Please enter at least one character criteria.");
    return;
    }
    
    var allChars = "";

    // IF function to include the character criteria
    if (inputUpperCase) {
      allChars += upperCase;
    }
    if (inputLowerCase) {
      allChars += lowerCase;
    }
      if (inputNumeric) {
      allChars += numeric;
    }
    if (inputSpecialChar) {
      allChars += specialChar;
    }
    
    var password = "";

    // FOR loop to ensure that the character criteria is met
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
    return password;   
  }
