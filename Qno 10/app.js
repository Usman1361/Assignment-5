// Write a ts program to check whether a character is uppercase or lowercase alphabet
var a = prompt("Enter any alphabetic character: ");
var b = String(a);
if (b >= 'A' && b <= 'Z') {
    console.log("The letter is capital.");
}
else if (b >= 'a' && b <= 'z') {
    console.log("The letter is Small.");
}
else {
    console.log("You did not enter any alphabet.");
}
