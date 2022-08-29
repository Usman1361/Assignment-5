// *******************QNo 18**********************
//  Write a ts program to calculate profit or loss.
var cost = prompt("Enter the cost price in Rs:");
var costp = Number(cost);
var sale = prompt("Enter the sale price in Rs:");
var salep = Number(sale);
if (salep - costp >= 0) {
    var profit = salep - costp;
    console.log("Profit of ", profit, "Rs occur.");
}
else if (salep - costp < 0) {
    var loss = costp - salep;
    console.log("loss of ", loss, "Rs occur.");
}
