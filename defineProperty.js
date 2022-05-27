const obj = {
    a:2,
    b:3
}
Object.defineProperty(obj,Symbol.iterator,{
    enumerable: false,
    writeable:false,
    configurable:false,
    value:()=>{
        const  o = this
        let idx = 0
        const ks = Object.keys(o)
        return{
            next:()=>{
                return{
                    value:o[ks[idx++]],
                    done: idx>ks.length
                }
            }
        }
    }
})
