Function.prototype.myCall = function(thisArg,...args){
    thisArg = Object(thisArg)
    let fn = Symbol('fn')
    thisArg[fn] = this;
    let res = thisArg[fn](...args)
    delete thisArg[fn]
    return res
}
function fn(){
    return this;
}
console.log(fn.myCall("aaa"));
console.log(fn.call('aaa'));

