
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numberSet ="1234567890";
const symbolSet ="~!@#$%^&*()_+?";
var specLowerC;
var specUpperC;
var specExtraS;
var specNumber;




// const characterChoice ="";

// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)]
    
// }





// Assignment Code
var generateBtn = document.querySelector("#generate");

//    1. Prompt the user for the password criteria
//      a. Password length 8<128
//      b.lowercase, uppercase, numbers, symbles

function generatePassword() {
    console.log("testing genPass")


   
    const passLength = prompt("Set password length (Password length must be between 8 and 128. \nPlease use numeric");
    // console.log(passLength)

//    2.Validate the input
    if (passLength == null) {
        return "Please make input"
    };
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert ("Password should be between 8 to 50 characters. \nMake sure you only use numarics, \nPlease try again.");
    }
    if (!confirm("Set length to " + passLength + " characters. \nIs this correct?")) {
        return generatePassword()
    }
    var specLowerC = confirm("Do you want to include lower case letters?");
    console.log(specLowerC) 
    if (specLowerC === true) {
        characterChoice += lowerCase; 
    }  
    console.log("specLowerC =",specLowerC);
    specUpperC = confirm("Do you want to include upper case letters?");
    
    if (specUpperC === true) {
        characterChoice += upperCase;
    }
    console.log("specupperC =",specUpperC);
    specNumber = confirm("Do you want to include numbers?")
    specExtraS = confirm("Do you want to include extra symbles?");
    console.log("specNumber =", specNumber, "specExtraS =", specExtraS );
    if (characterChoice.length === "") {
        alert("You haven't met the password criteria. \n Try Again")
        return;
    }
    //    3.display password to the page
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    for (var i = 0; i < passLength; i++  )  {
        passkey += characterChoice[Math.floor(Math.random() * characterChoice.length)]
        console.log("passkey", passkey);
    }
    return passkey
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);