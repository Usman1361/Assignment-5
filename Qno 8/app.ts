// **********************************Qno 8********************************************
// Write a ts program to input any alphabet and check whether it is vowel or consonant.

var b: string | null = prompt("Enter any alphabet: ");
var a: string = String(b);
if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U') {
    console.log("The character is vowel.");

}
else {
    console.log("The charcter is consonant.");

}