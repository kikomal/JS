const komal = {
    firstname: "Komal",
    lastname: "Kumari",
    birthyear: 1996,
    friends: 3,
    drivers_licence: true,
    friend: ["Megha", "Nidhi", "Kavya"],
    calcAge: function () {
        this.age = 2021 - this.birthyear
        return this.age;
    }
};
console.log(komal.calcAge)
console.log(`${komal.firstname} has ${komal.friend.length} friends and her best friend is 
${komal.friend[1]}. That's it! `)
console.log(`${komal.firstname} is a ${komal.calcAge} year's old developer and she has ${this.drivers_licence ? 'a' : 'no'} driver's licence `)

const mark = {
    firstname: "Mark",
    lastname: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
}
const john = {
    firstname: "John",
    lastname: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}
console.log(john.bmi)
console.log(`Higher BMI award is given to ${john.calcBMI > mark.calcBMI ? 'John' : 'Mark'} John ${john.bmi},Mark ${mark.bmi}`)