// *******************QNo 18**********************
//  Write a ts program to calculate profit or loss.
var cost: string | null = prompt("Enter the cost price in Rs:");
var costp: number = Number(cost);
var sale: string | null = prompt("Enter the sale price in Rs:");
var salep: number = Number(sale);
if (salep - costp >= 0) {
    var profit: number = salep - costp;
    console.log("Profit of ", profit, "Rs occur.");

}
else if (salep - costp < 0) {
    var loss: number = costp - salep;
    console.log("loss of ", loss, "Rs occur.");
}