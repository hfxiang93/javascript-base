const obj = Object.create({
    name: 'jack',
    age: 19
})
const proxyObj = new Proxy(obj,{
    get: function (target, age, receiver) {
        if(target[age]>=18){
            return '成年人'
        }else {
            return '未成年人'
        }
    }
})

console.log(obj.age)
console.log(proxyObj.age)
console.log(obj === proxyObj)
