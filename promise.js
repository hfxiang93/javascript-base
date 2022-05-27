
/**
 * 手写实现一个Promise
 *
 * @param {*} executor
 */
function Promise(executor){
    let self = this
    //因为value和reason值需要在Promise实例方法then中使用，所以把这两个值，赋给new出来的实例
    self.value = undefined
    self.reason = undefined
    //在内部维护一个status状态
    self.status = 'pending'
    //可能new Promise中会有异步的操作，此时我们把异步操作时，执行的then函数的成功回调，统一保存在该数组中
    self.onResolvedCallbacks = []
    self.onRejectedCallbacks = []
    //声明一个resolve函数
    function resolve(value){
        //此时新增一个状态判断，当状态为pending的时候才能执行
        if(self.status === 'pending'){
            self.value = value
            //当调用了resolve时，更改状态为resolved
            self.status = 'resolved'
            //当调用resolve时，把该数组中存放的成功回调都执行一遍，如果是异步，则会把成功的回调都存到该数组里了，如果是异步，则没存到
            self.onResolvedCallbacks.forEach(fn=>fn())
        }
    }
    //声明一个reject函数
    function reject(reason){
        //此时新增一个状态判断，当状态为pending的时候才能执行
        if(self.status === 'pending'){
            self.value = reason
            //当调用了reject时，更改状态为rejected
            self.status = 'rejected'
            //当调用reject时，把该数组中存放的失败回调都执行一遍，如果是异步，则会把成功的回调都存到该数组里了，如果是异步，则没存到
            self.onRejectedCallbacks.forEach(fn=>fn())
        }
    }
    //当我们在执行executor时，内部抛出错误的时候，可以利用try catch来处理这个问题
    try{
        //把resolve、reject函数传到executor
        executor(resolve,reject)
    }catch(error){
        reject(error)
    }
}
//对应上面成功的回调函数onFulfilled以及失败的回调函数onRejected
Promise.prototype.then = function(onFulfilled,onRejected){
    let self = this
    //当我们在then中，执行了成功或者失败的回调函数时，首先要判断目前处于什么状态
    if(self.status === 'resolved'){
        //当调用了resolve函数后，会执行成功的回调函数，并且把resolve中传递的值，传递给成功的回调函数
        onFulfilled(self.value)
    }
    if(self.status === 'rejected'){
        //当调用了reject函数后，会执行成功的回调函数，并且把reject中传递的值，传递给失败的回调函数
        onRejected(self.reason)
    }
    //当new Promise中有resolve、reject处于异步中，执行then的时候，状态为pending
    if(self.status === 'pending'){
        //把成功的回调函数，存到该数组中，这样写的好处，就是把参数传进去，不需要将来遍历onResolvedCallbacks时，再传参
        self.onResolvedCallbacks.push(()=>{
            onFulfilled(self.value)
        })
        //把失败的回调函数，存到该数组中，这样写的好处，就是把参数传进去，不需要将来遍历onRejectedCallbacks时，再传参
        self.onRejectedCallbacks.push(()=>{
            onRejected(self.reason)
        })
    }
}
// 把Promise暴露出去
module.exports = Promise
