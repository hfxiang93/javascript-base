// import './css/style.css';   // 引入css
// import './less/style.less'; // 引入less
// import './websocket-cilent.js'
// 事件循环机制
console.log('start')
setTimeout(function(){
	console.log('setTimeOut1')
	new Promise(function(resolve){
		console.log('promise1')
		resolve()
	}).then(function(){
		console.log('promise resolved1')
	})
},0)
new Promise(function(resolve){
	console.log('promise2')
	resolve()
}).then(function(){
	console.log('promise resolved2')
	setTimeout(function(){
	console.log('timeout2')})
})
console.log('end')
// 打印结果 start->promise2 ->end-> promise resolved2 ->setTimeout1-> promise1-> promise resolved1 ->timeout2

// 洗牌算法（随机重新排序）
function shuffle(arr){
	for (let i=0;i<arr.length;i++){
		let newIndex = Math.floor(Math.random()*(i+1));
		[arr[i],arr[newIndex]] = [arr[newIndex],arr[i]];
	}
	return arr
}
const array = [1,2,2,34,2,21,1,1,3,42,5]
console.log(shuffle(array))
