const billInput = prompt("Enter bill amount:", "100");
const tipInput = prompt("Enter tip percentage:", "15");

const bill = Number(billInput);
const percentage = Number(tipInput);

if (
    billInput === null ||
    tipInput === null ||
    billInput.trim() === "" ||
    tipInput.trim() === "" ||
    !Number.isFinite(bill) ||
    !Number.isFinite(percentage) ||
    bill < 0 ||
    percentage < 0
) {
    console.log("Invalid input");
} else {
    const tip = bill * percentage / 100;
    let total = bill;
    total += tip;

    console.log(`Subtotal: $${bill}`);
    console.log(`Tip Percentage: ${percentage}%`);
    console.log(`Calculated Tip: $${tip}`);
    console.log(`Total Amount to Pay: $${total}`);
}