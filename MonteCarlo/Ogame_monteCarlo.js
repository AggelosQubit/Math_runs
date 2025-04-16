function randomInRange(bandInf, BandeSup) {
    return ((BandeSup - bandInf) * Math.random()) + bandInf;
}
let totalProfit = 0;
let lossCount = 0;
let unprofitableCount = 0;

for (let i = 0; i < 10000; i++) {


    const metal = randomInRange(10000, 100000);
    const cristal = randomInRange(5000, 50000);
    const hasDefense = Math.random() < 0.3; // 30% chance
    const hasTrapFleet = Math.random() < 0.05; // 5% chance
    const fuelCost = randomInRange(1000, 5000) * 1.5;

    let loss = 0;
    if (hasDefense) {
        loss = randomInRange(2000, 15000); // valeur arbitraire de perte de transporteurs
    }
    const loot = metal + cristal;
    const netProfit = loot - loss - fuelCost;

    // random values + profit calc
    totalProfit += netProfit;

    if (loss > 0) lossCount++;
    if (netProfit < 0) unprofitableCount++;
}

console.log("Profit moyen :", totalProfit / 10000);
console.log("Raids avec pertes :", (lossCount / 10000) * 100 + "%");
console.log("Raids non rentables :", (unprofitableCount / 10000) * 100 + "%");
