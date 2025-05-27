
function passwordGenerator() {

    /*--- Get input from the form ---*/
    let input = document.getElementById('input').value;
    input = Number(input);
    console.log(typeof input,input);
    const display = document.getElementById('password');

    /*--- Intializing the configurations ---*/
    let passwordLength = input;
    let includeLowerCase = true;
    let includeUpperCase = true;
    let includeNumbers = true;
    let includeSpecialCharacters = true;

    /*--- Providing character sets ---*/
    const lowerCasechars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberchars = '0123456789';   
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedcharacters = '';
    let password = '';

    allowedcharacters += includeLowerCase ? lowerCasechars : '';
    allowedcharacters += includeUpperCase ? upperCasechars : '';
    allowedcharacters += includeNumbers ? numberchars : '';
    allowedcharacters += includeSpecialCharacters ? specialChars : '';

    /*--- Input Validation ---*/
    if(passwordLength < 6) {
        display.textContent = 'Password length must be at least 6';
        return 'Pasword length must be 10';
    }

    if(allowedcharacters.length === 0) {
        display.innerHTML =  'At least one character type must be included';
        // return 'At least one character type must be included';
    }

    /*--- Generating the password ---*/
    for(let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * allowedcharacters.length);
        password += allowedcharacters[index];
    }

    /*--- Displaying the password ---*/
    display.innerHTML =  password;
    // return password;
}

//   const password = passwordGenerator(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters);

// console.log(Generated password: ${password});