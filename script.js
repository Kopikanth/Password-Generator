const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#%^&*()_+~|{}[]<>?/-=";
const allChars = upperCase + lowerCase + numbers + symbols;

document.getElementById("generatePass").addEventListener("click", createPass);
document.getElementById("copyIcon").addEventListener("click", copyPass);

function createPass(){
    pass = "";
    pass += upperCase[Math.floor(Math.random()*upperCase.length)];
    pass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    pass += numbers[Math.floor(Math.random()*numbers.length)];
    pass += symbols[Math.floor(Math.random()*symbols.length)];
    while(pass.length < length){
        pass += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = pass;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}