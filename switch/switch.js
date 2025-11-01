let favMonth = prompt("What is your favorite month?").toLowerCase();

switch (favMonth) {
    // cases
    case "january":
        console.log("January is aweosme");
        break;
    
    case "febuary":
        console.log("Febuary is a great choice!");
        break;

    case "march":
        console.log("March is cool!");
        break;

    case "april":
        console.log("April is nice!");
        break;

    case "may":
        console.log("May is very nice!");
        break;

    case "june":
        console.log("June has nice weather!");
        break;
    
    case "july":
        console.log("July is a great choice!");
        break;

    case "august":
        console.log("August, right before school!");
        break;

    case "september":
        console.log("September, back to school month!");
        break;

    case "october":
        console.log("October is great!");
        break;

    case "november":
        console.log("I love november too!");
        break;

    case "december":
        console.log("Great month, I love Christmas!");
        break;

    default:
        console.log("That's a great choice!")
        break;
}

if (favMonth == "december" || favMonth == "january" || favMonth == "febuary") {
    console.log("You love the winter months!")
} else if (favMonth == "june" || favMonth == "july" || favMonth == "august") {
    console.log("You enjoy the summer months!")
} else {
    console.log("Other months are interesting too!")
}