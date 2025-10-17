// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Wings", "fries", "pears", "burgers", "chicken sandwhich", "tacos"];
console.log(favoriteFoods);
favoriteFoods.push("pizza");
console.log("Welcome to Assignment 7!");

// 2. Loop through the list and print: "One of my favorite foods is ______."
console.log(" ");
console.log("My favorite foods:");
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i]);
}

// 3. Print out the rating for each food with a ranking
console.log(" ");
console.log("My food rankings:");
for (let i = 0; i < favoriteFoods.length; i++) {
  let number = i + 1;
  console.log("My #" + number + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a function printFoodRecommendation(foodName)
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to everyone.");
  console.log("Trust me — " + foodName + " it's really good.");
  console.log(" ");
}

// 4b. Call the function at least 3 times
console.log("Food recommendations:");
printFoodRecommendation("ice cream");
printFoodRecommendation("sushi");
printFoodRecommendation("pasta");

// Friend's favorite foods list
let friendFavorites = [
  "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// 5. Print out only foods that have an "a" in the name
console.log("Foods with letter a:");
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  if (food.includes("a")) {
    console.log(food);
  }
}

// 6. Store the result in an array called foodsWithA
let foodsWithA = [];
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  if (food.includes("a")) {
    foodsWithA.push(food);
  }
}
console.log(" ");
console.log("Foods with a array:");
console.log(foodsWithA);

// 7. Create longFoodNames array for foods longer than 6 characters
let longFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  if (food.length > 6) {
    longFoodNames.push(food);
  }
}

// 8. Create shortFoodNames array for foods 6 characters or shorter
let shortFoodNames = [];
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }
}

// 9. Print both arrays and compare
console.log(" ");
console.log("Long food names:");
console.log(longFoodNames);
console.log("Short food names:");
console.log(shortFoodNames);

console.log(" ");
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else {
  console.log("There are more short-named foods.");
}

// 10. STRETCH: Find the longest food name
let longestName = "";
for (let i = 0; i < friendFavorites.length; i++) {
  let food = friendFavorites[i];
  if (food.length > longestName.length) {
    longestName = food;
  }
}
console.log(" ");
console.log("The longest food name is " + longestName);
console.log("It has " + longestName.length + " letters");