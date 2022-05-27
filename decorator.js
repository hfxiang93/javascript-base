function withSpeak(target){
    target.prototype.speak = function (){
        console.log(`${target.name} speak I have ${target.money}$ money`)
    }
}

@withSpeak()
class Person {
    constructor(name,money) {
        this.name = name
        this.money = money
    }
}
const p1 = new Person('jack',10000)
p1.speak()
