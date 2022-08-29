// ********************************************************************************************Qno 19****************************************************************
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var physics1 = prompt("Enter Physics marks: ");
var physics = Number(physics1);
var chemistry1 = prompt("Enter chemistry marks: ");
var chemistry = Number(chemistry1);
var biology1 = prompt("Enter biology marks: ");
var biology = Number(biology1);
var mathmatics1 = prompt("Enter mathmatics marks: ");
var mathmatics = Number(mathmatics1);
var computer1 = prompt("Enter computer marks: ");
var computer = Number(computer1);
var average = (physics + chemistry + computer + mathmatics + biology) / 5;
if (average >= 90) {
    console.log("Grade A.");
}
else if (average >= 80) {
    console.log("Grade B.");
}
else if (average >= 70) {
    console.log("Grade C.");
}
else if (average >= 60) {
    console.log("Grade D.");
}
else if (average >= 40) {
    console.log("Grade E.");
}
else if (average <= 40) {
    console.log("Grade F.");
}
