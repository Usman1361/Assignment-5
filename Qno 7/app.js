// ****************************Qno 7*********************************
// Write a ts program to check whether a character is alphabet or not
var b = prompt("Enter any alphabet or other");
var a = String(b);
if (a >= 'a' && a <= 'z' || a >= 'A' && a <= 'Z') {
    console.log("So the Character is alphabet: ");
}
else {
    console.log("It is not a alphabet.");
}
