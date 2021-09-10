
const calcAverage = (dolphin1, dolphin2, dolphin3) => (dolphin1 + dolphin2 + dolphin3) / 3
const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(23, 34, 27)
function checkWinner(scoreDolphin, scoreKoalas) {
    if (scoreDolphin > scoreKoalas) {
        if (scoreKoalas * 2 <= scoreDolphin) {
            console.log(`Winner is Dolphin with score ${scoreDolphin}`)
        }
        else {
            console.log("Nobody is winner")
        }
    }
    else {
        if (scoreDolphin * 2 <= scoreKoalas) {
            console.log(`Winner is Dolphin with score ${scoreKoalas}`)

        }
        else {
            console.log("Nobody is winner")
        }
    }
}
checkWinner(scoreDolphin, scoreKoalas)
checkWinner(576, 111)