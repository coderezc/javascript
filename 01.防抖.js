let debounce = function (fn, time) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};
let ads =  debounce(() => console.log("111"), 3000);
ads();
setTimeout(ads,2000)
