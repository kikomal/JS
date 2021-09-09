const dolphinscore1 = 6;
const dolphinscore2 = 08;
const dolphinscore3 = 9;
const koalasscore1 = 8;
const koalasscore2 = 1;
const koalasscore3 = 10;

const averagedolphin = (dolphinscore1 + dolphinscore2 + dolphinscore3) / 3
const averagekoalas = (koalasscore1 + koalasscore2 + koalasscore3) / 3
console.log(averagedolphin, averagekoalas)
if (averagedolphin === averagekoalas && averagedolphin >= 100 && averagekoalas >= 100) {
    console.log("Match is draw")
}
else if (averagedolphin > averagekoalas && averagedolphin >= 100) {
    console.log("Winner is Dolphin")
}
else if (averagekoalas > averagedolphin && averagekoalas >= 100) {
    console.log("Winner is Koalas")

}
else {
    console.log("No one won the trophy:(")
}