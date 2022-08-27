// ******************************************Qno 9*********************************************************
// Write a ts program to input any character and check whether it is alphabet, digit or special character.
var a:string|null=prompt("Enter any number character or symbol: ");
var b:any=String(a);
if(b>='A'&&b<='Z'|| b>='a' && b<='z'){
    console.log("The entered character is alphabet.");
    
}
else if(b>= -Infinity || b<= +Infinity){
    console.log("The entered character is number.");
    
}
else{
    console.log("It is a special character.");
    
}