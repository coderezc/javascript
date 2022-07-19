Function.prototype.myApply = function(thisArg,...args){
  thisArg = Object(thisArg);
  let fn = Symbol("fn");
  thisArg[fn] = this;
  let res = thisArg[fn](args);
  delete thisArg[fn];
  return res;
}
function fn() {
  return this;
}
console.log(fn.myApply("aaa"));
console.log(fn.apply("aaa"));