
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Wings", "fries", "pears", "burgers", "chicken sandwhich", "tacos"];
console.log(favoriteFoods);
favoriteFoods.push("pizza");


console.log("--- Simple Checks ---");


if (favoriteFoods.includes("pizza")) {
    console.log("I love pizza!");
} else {
    console.log("No pizza found.");
}


if (favoriteFoods.includes("Wings")) {
    console.log("Wings are my favorite!");
}


if (favoriteFoods.length > 5) {
    console.log("I have lots of favorite foods!");
} else {
    console.log("I need more favorite foods.");
}

let food = "pears";
if (food === "pears") {
    console.log("Pears are healthy!");
}

// Check for tacos
if (favoriteFoods[5] === "tacos") {
    console.log("Tacos are at position 6!");
}