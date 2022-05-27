// reduce(callback(total, current, index, currentArray), initValue)
// reduce有两个参数，第一个是回调函数，第二个时初始值，可选
// 回调函数有4个参数，从左到右依次分别是积累值、当前值、当前下标、当前数组
const array = [3, 5, 4, 3, 6, 2, 3, 4]
// 求和
const count = array.reduce((total,current)=>{
    return total + current
})
console.log(count)
// 求乘积
const acc = array.reduce((total,current)=>{
    return total * current
})
console.log(acc)
// 求出最大值
const maxValue = array.reduce((total,current)=>{
    return Math.max(total,current)
}, -Infinity)
console.log(maxValue)
// 求出最大值的下标
const index = array.findIndex((item)=>{return item === Math.max(...array)})
console.log(index)
// 移除数组重复项
const newArray = Array.from(new Set(array))
console.log(newArray)
const newArray1 = array.reduce((total,current)=>{
    if(total.indexOf(current)=== -1){
        total.push(current)
    }
    return total
},[])
console.log(newArray1)
// 扁平数组
let flattened = [[3, 4, 5], [2, 5, 3], [4, 5, 6]].reduce(
    (singleArr, nextArray) => singleArr.concat(nextArray), [])
let flat = [[3, 4, 5], [2, 5, 3], [4, 5, 6]].reduce((pre,cur)=>{
    return[...pre,...cur]
},[])
console.log(flattened)
console.log(flat)
