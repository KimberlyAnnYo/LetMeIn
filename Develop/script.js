// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generatePassword = function () {
  var length = getLength();
  var characterTypes = getCharacterType();
  var password = ""
  var i = 0 
  while (password.length < length) {
    //(let i = 0; i < characterTypes.length; i++) {
    console.log(characterTypes[i]);
    var listOfCanidates = characters[characterTypes[i]]
    var randomIndex = Math.floor(Math.random() * listOfCanidates.length);
    console.log(listOfCanidates[randomIndex]);
    password = password + listOfCanidates[randomIndex];
    i++;
  }

  return password;

};


var getLength = function () {
  while (true) {
    var length = parseInt(window.prompt("Choose password length. min 8 - max 128"))
    if (length >= 8 && length <= 128 && !isNaN(length)) {
      return length;
    }
    window.alert("Enter a value between 8 - 128");
  }
};

var characters = {
  "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lowercase": "abcdefghijklmnopqrstuvwxyz",
  "numbers": "0123456789",
  "symbols": "!@#$%^&*()_-+={}[]|\"",
}

var getCharacterType = function () {
  var result = []
  while (true) {
    if (window.confirm("uppercase?")) {
      result.push("uppercase")
    }
    if (window.confirm("lowercase?")) {
      result.push("lowercase")
    }
    if (window.confirm("numbers?")) {
      result.push("numbers")
    }
    if (window.confirm("symbols?")) {
      result.push("symbols")
    }
    if (result.length > 0) {
      return result
    }
    window.alert("You must select one!")
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
