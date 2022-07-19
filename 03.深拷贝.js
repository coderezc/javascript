//只适用于对象和数组
function checkType(target){
    return Object.prototype.toString.call(target).slice(8,-1);
}
function deepClone(target){
    if(checkType(target) !== 'Array'&&checkType(target) !== 'Object')return target;
    else if(checkType(target) === 'Array'){
        let result = [];
        target.forEach((item,index)=>{
            result[index] = deepClone(item);
        })
    }
    else if(checkType(target) === 'Object'){
        let result = {};
        for(key in target){
            result[key] = deepClone(target[key]);
        }
    }
    return result;
}