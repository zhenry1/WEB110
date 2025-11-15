// NAME: ZACHARY HENRY
// DATE: 11/14/25

function calcGasAvg() {
    let total = 1
    let weeklyGasTotal = prompt("Enter your weekly gas total, or enter -1 to end");

    while (weeklyGasTotal != -1) {
        total += Number(weeklyGasTotal);
        entryCount++;

        weeklyGasTotal = prompt("Enter your weekly gas total, or enter -1 to end");
    }

    console.log(total)
    console.log(entryCount)

    let averageGas = total / entryCount
    return averageGas
}

let entryCount = 0
let username = prompt("Please enter your name: ")
let averageGas = calcGasAvg()

if (entryCount === 0) {
    confirm("No gas totals were entered.");
} else if (entryCount === 1) {
    confirm(`You entered ${entryCount} gas total.`);
} else {
    confirm(`You entered ${entryCount} gas totals.`);
}

if (entryCount > 0) {
    confirm(username + "'s average weekly gas bill is " + averageGas.toFixed(2));
}