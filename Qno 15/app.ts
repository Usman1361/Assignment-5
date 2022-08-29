// ***************************************Qno 15************************************************
//  Write a ts program to input all sides angles of a triangle and check whether triangle is valid or not.
var angle: string | null = prompt("Enter 1st angle for triangle: ");
var angle1: number = Number(angle);
var angle2: string | null = prompt("Enter 2nd angle for triangle: ");
var angle3: number = Number(angle2);
var angle4: string | null = prompt("Enter 3rd angle for triangle: ");
var angle5: number = Number(angle4);
if ((angle1 + angle3 + angle5) == 180) {
    console.log("Triangle is valid.");

}
else {
    console.log("Triangle is not Valid");

}