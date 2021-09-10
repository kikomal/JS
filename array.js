function calcTip(a) {


    if (a >= 50 && a <= 300) {
        console.log(`Bill value is ${a} and tip value is ${1.5 * a}`)

    }
    else {
        console.log(`Bill value is ${a} and tip value is ${0.2 * a}`)
    }
    return a >= 50 && a <= 300 ? "Hello" : "Bye";

}
const bills = [125, 555, 44]
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]