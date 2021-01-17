// Calculate feet to mile

const feetToMile = function (feet) {

    const mile = feet * 0.00018939
    return mile;

}
const result = feetToMile(606461).toFixed(3);
console.log("Feet : " + result);


// Calculate wood

const woodCalculator = function (chair, table, bed) {
    const woodForChair = 1 * chair;
    const woodForTable = 3 * table;
    const woodForBed = 5 * bed;
    const totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

const woods = woodCalculator(19, 8, 9);
console.log("Total Woods : " + woods);


// Calculate brike

const brickCalculator = function (flor) {
    let bricks = 0;
    if (flor > 0 && flor <= 10) {
        bricks = 15000 * flor;

    }
    else if (flor >= 11 && flor <= 20) {
        const fst10 = 15000 * 10;
        const snd20 = 12000 * (flor - 10);
        bricks = fst10 + snd20;
    }
    else {
        const fst10 = 15000 * 10;
        const snd20 = 12000 * 10;
        const moreFlor = 10000 * (flor - 20);
        bricks = fst10 + snd20 + moreFlor;
    }
    return bricks;
}

const brick = brickCalculator(26);
console.log('Total Brick : ' + brick);



// tinyFriend find

const tinyFriend = function (names) {
    var lenghts = [];
    for (let i = 0; i < names.length; i++) {
        let stringCount = names[i].length;
        lenghts.push(stringCount);
    }
    const nameIndex = lenghts.indexOf(Math.min(...lenghts));
    return nameIndex;
}

const friendNames = ['Siam', 'Kabir', 'Khushnobish', 'Aronno', 'Mhamud'];
const smallName = friendNames[tinyFriend(friendNames)];
console.log("Small Name : " + smallName);

