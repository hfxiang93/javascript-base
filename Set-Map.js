/**
 * Created by xianghiafeng on 2019/12/5.
 */
// Set和Map主要用于  数据重组和数据储存
// Set是一种集合的数据结构，Map是一种叫做字典的数据结构
// Set 本身是一种构造函数，用来生成 Set 数据结构   new Set([iterable])
const set = new Set()
let array = [1,2,3,4,3,2,1].forEach(x=>set.add(x))
for (let i of set){
  console.log(i)
}
//数组去重
let arr = [1,2,3,4,3,2,1]
let newArr = Array.from(new Set(arr))
let newArr2 = [...new Set(arr)]
console.log(newArr)
console.log(newArr2)