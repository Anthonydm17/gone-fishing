const prompt = require("prompt-sync")({sigint : true});


let fishAdjectives1 = ["Atlantian", "Krusty", "Sandy", "Shiny", "Barnicle-covered", "Tartar", "Chummy", "Slimy", "Scaley", "Irridescent"];
let fishAdjectives2 = ["Scrawny", "Rapid", "Jumping", "Chiseled", "Murderous", "Gigantic", "Rare", "Fragrent", "Saucy", "Delicate"];
let fishTypes = ["Shark", "Swordfish", "Shrimp", "Salmon", "Trout", "Anchovy", "Cod", "Eel", "Squid", "Jellyfish"];


let hour = 6;
let caughtFish = [];
let totalCaughtWeight = totalWeight();
let totalCaughtValue = totalValue();


console.log("......");
console.log("............");
console.log("You've gone fishing until noon, and can catch up to a maximum of 10 lbs of fish.")
console.log("==============");
console.log(" ");
console.log("==============");


while (hour < 12) {
    let randomFish = randomFishGenerator();
    let fishWeight = randomWeight();
    let fishValue = randomValue();
    totalCaughtWeight = totalWeight();
    totalCaughtValue = totalValue();

    const fish = {
        fish: randomFish,
        weight: Number(fishWeight),
        value: Number(fishValue)
    }

    console.log(`The time is ${hour}:00 am.  So far you've caught: ${caughtFish.length} fish Total weight of: ${totalCaughtWeight} lbs Valued at: $${totalCaughtValue.toFixed(2)}.`);
    console.log("==============");
    console.log(" ");
    console.log("==============");
    console.log(`You caught a ${randomFish} weighing ${fishWeight} lbs with a value of $${fishValue}!`);
    console.log("");
       

    if ((totalCaughtWeight + fish.weight) > 10){
        console.log("Sorry, you have too much in your bag. You toss the fish back in the water. ");
        console.log("");
    }

    else if ((totalCaughtWeight + fish.weight) < 10) {
        let catchOrRelease = prompt("Would you like to [c]atch this fish, or [r]elease it? ");

        if (catchOrRelease === "c") {
            caughtFish.push(fish);
            console.log("");             
            console.log("You put the fish in your rugsack");
            console.log("==============");
            console.log(" ");
            console.log("==============");

        }
        else if (catchOrRelease === "r") {
            console.log("");            
            console.log("You toss the fish back into the water");
            console.log("==============");
            console.log(" ");
            console.log("==============");  

;        }

    }
    hour++;
}
console.log("");
console.log(`The time is now 12:00 pm. Time's up! `)
console.log(`You caught ${caughtFish.length} fish, for a total weight of ${totalCaughtWeight} lbs and a total value of $${totalCaughtValue.toFixed(2)}.`)
console.log("==============");
console.log(" ");
console.log("==============");

function randomFishGenerator() {
    let randomAdjective1 = fishAdjectives1[Math.floor(Math.random() * fishAdjectives1.length)];
    let randomAdjective2 = fishAdjectives2[Math.floor(Math.random() * fishAdjectives2.length)];
    let randomFishType = fishTypes[Math.floor(Math.random() * fishTypes.length)];
    return `${randomAdjective1} ${randomAdjective2} ${randomFishType}`;
}


function randomWeight(min, max) {
    let weight = (Math.floor(Math.random() * (4.00 - 1.00 + 1.00) + 1.00).toFixed(2));
    return weight;
}

function randomValue(min, max) {
    let value = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
    return value;
}
function totalWeight() {
    let sum = 0;
    for (let i = 0; i < caughtFish.length; i++)
        sum = sum + caughtFish[i].weight;
    return sum;
}

function totalValue() {
    let sum = 0;
    for (let i = 0; i < caughtFish.length; i++) {
        sum = sum + caughtFish[i].value;
    }
    return sum;
}