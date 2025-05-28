
function passwordGenerator() {

    /*--- Get input from the form ---*/
    const display = document.getElementById('password');

    /*--- Intializing the configurations ---*/
    const passwordLength = 10;
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

    /*--- Generating the password ---*/
    for(let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * allowedcharacters.length);
        password += allowedcharacters[index];
    }

    /*--- Displaying the password ---*/
    display.innerHTML =  password;
}
