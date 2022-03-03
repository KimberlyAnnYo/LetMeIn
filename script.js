// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//generate password function
var generatePassword = function () {
  var length = getLength();
  var characterTypes = getCharacterType();
  var password = ""
  
  for (let i = 0; i < length; i++) {
    console.log(characterTypes);
    var randomIndex = Math.floor(Math.random() * characterTypes.length);
    password = password + characterTypes[randomIndex];
    console.log(password);
  }

  return password;

};

//get length of password
var getLength = function () {
  while (true) {
    var length = parseInt(window.prompt("Choose password length. min 8 - max 128"))
    if (length >= 8 && length <= 128 && !isNaN(length)) {
      return length;
    }
    window.alert("Enter a value between 8 - 128");
  }
};
//characteres object
var characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_-+={}[]|\"",
}
//determine what types of characters in the password
var getCharacterType = function () {
  var result = ""
  while (true) {
    if (window.confirm("uppercase?")) {
      result = result + characters.uppercase
    }
    if (window.confirm("lowercase?")) {
      result = result + characters.lowercase
    }
    if (window.confirm("numbers?")) {
      result = result + characters.numbers
    }
    if (window.confirm("symbols?")) {
      result = result + characters.symbols
    }
    if (result.length > 0) {
      return result
    }
    window.alert("You must select one!")
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
