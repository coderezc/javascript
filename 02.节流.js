let throttle = function(fn,time){
    let timer;
    return function(...args){
        if(timer)return;
        timer = setTimeout(()=>{
            fn.apply(this,args)
            timer = null;
        },time)
    }
}

let fn = throttle(() => {
  console.log('hello')
})

fn()
setTimeout(() => {
  fn()
}, 3000)
setTimeout(() => {
  fn()
}, 7000)
// 输出：hello,hello，函数只执行了2次