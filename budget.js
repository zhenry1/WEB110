// Variables
let money = 10000;
let housing = 1000;
let food = 100;
let monthlyUtilities = 100;

// Store Variables
let totalIncome = money;
let totalExpenses = housing + food + monthlyUtilities;
let remainingMoney = money - totalExpenses;
let rentPercentage = (housing / totalIncome) * 100;
let groceryPercentage = (food / totalIncome) * 100;

// Display
console.log( "The total income was: " + money.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log("The rent amount was: " + housing.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The grocery total was: " + food.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log(`The percent spent on rent is: %${rentPercentage}`)
console.log(`The percent spent on groceries was: %${groceryPercentage}`)