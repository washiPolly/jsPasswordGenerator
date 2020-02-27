//prompt user how many numbers, store in var
// var pwLength = prompt("Please Enter your Password length, must be between 8-128");
//prompt user lower? store in var
var pwLower = prompt("Would you like to include Lower Cases? Y/N ");
//prompt user upper? store in var
// var pwUpper = prompt("Would you like to include Upper Cases? Y/N ");
//prompt user number? store in var
// var pwNumber = prompt("Would you like to include Numbers? Y/N ");
//prompt user symbol? store in var
// var pwSymbol = prompt("Would you like to include Symbols? Y/N ");

// console.log(pwLength, pwLower, pwUpper, pwNumber, pwSymbol);


//check which options selected
//generate function to get random passwords for each type
function getRandomLower(){
    if (pwLower = "y"){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97); 
    
    }
}
console.log(getRandomLower());


//loop to repeat for length, how to concat?
//generate event to listen for click
//clipboard





//Generator Functions

// function getRandomLower(){
//     return.String.fromCharCode(Math.floor(Math.random() *26) + 97);

// }

// console.log(getRandomLower);