//prompt user how many numbers, store in var
//praseInt converts String number to Integer
var pwLength = parseInt(prompt("Please Enter your Password length, must be between 8-128"));

while (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 - 128 characters");
    pwLength = parseInt(prompt("Please Enter your Password length, must be between 8-128"));
}


if (pwLength > 8 || pwLength < 128) {
//prompt user lower? store in var
var pwLower = prompt("Would you like to include Lower Cases? Y/N ");
//prompt user upper? store in var
var pwUpper = prompt("Would you like to include Upper Cases? Y/N ");
//prompt user number? store in var
var pwNumber = prompt("Would you like to include Numbers? Y/N ");
//prompt user symbol? store in var
var pwSymbol = prompt("Would you like to include Symbols? Y/N ");


while (pwLower && pwUpper && pwNumber && pwSymbol === "n"){
    alert("At Least one selection needs to be present.");
    pwLower = prompt("Would you like to include Lower Cases? Y/N");
    var pwUpper = prompt("Would you like to include Upper Cases? Y/N ");
    var pwNumber = prompt("Would you like to include Numbers? Y/N ");
    var pwSymbol = prompt("Would you like to include Symbols? Y/N ");
}
}

var pwBoxEl = document.querySelector("#pwBox");
//disply pw document.textContent
//addEventListener and identify element to display in text box
console.log(pwLength, pwLower, pwUpper, pwNumber, pwSymbol);

//create loops to validate Inputs (number between 8-128 and also if input is all "N")

//check which options selected
//generate function to get random passwords for each type
function getRandomLower(){
    if (pwLower = "y"){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97); 
    }
}

function getRandomUpper(){
    if (pwUpper = "y"){
        return String.fromCharCode(Math.floor(Math.random() *26) + 65);
    }
}

function getRandomNum(){
    if (pwNumber = "y"){
        return (Math.floor(Math.random() *10));
    }
}

function getRandomSym () {
    if (pwSymbol = "y"){
    // example set of special chars as a string in no particular order
    var s = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // generating a random index into the string and extracting the character at that position
    return s.substr(Math.floor(s.length*Math.random()), 1);
    } 
}
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNum());
console.log(getRandomSym());

    


//loop to repeat for length, how to concat?
// for (var i = 0; i < pwLength; i++) {
//     var genPw = genPw.push(pwBox);
// }
// console.log(genPw);

//create random array
function getRandomElement(arr){
    var randomIndex = Math.floor(Math.random() * arr.pwLength);
    var randomElement = arr[randomIndex];
        return randomElement;
        
}

console.log(getRandomElement);


//generate event to listen for click
//clipboard





//Generator Functions

// function getRandomLower(){
//     return.String.fromCharCode(Math.floor(Math.random() *26) + 97);

// }

// console.log(getRandomLower);

