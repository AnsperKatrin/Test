/**
 * CONDITIONALS
 * Puudutatud teemad: conditionals, built-in objects type conversations & type casting!
 */


const coffeeLimit = 100;
let coffeeCount = "100";

if (coffeeCount < coffeeLimit) {
    console.log("vota vota!");
}
else if (coffeeLimit === Number(coffeeCount)) {
    console.log("Hoiatan. See on viimane tass!");
}
else {
    console.log("Pese mind");
}