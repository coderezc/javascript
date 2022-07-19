Function.prototype.myBind = function(thisArg){
    let that = this
    return function(...args){
        thisArg = Object(thisArg);
        let fn = Symbol('fn')
        thisArg[fn] = that;
        let res = thisArg[fn](...args);
        delete thisArg[fn]
        return res;
    }
}
function fn() {
  return this;
}
let newFn = fn.bind('aaa')
let newFn1 = fn.myBind('bbb')
console.log(newFn());
console.log(newFn1());
