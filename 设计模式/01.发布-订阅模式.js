class pubSub {
    constructor(){
        this.events = {}
    }
    sub(key,fn){
        if(!this.events[key]){
            this.events[key] = []
        }
        this.events[key].push(fn)
    }
    pub(key,...args){
        if(this.events[key]){
            this.events[key].forEach(fn=>fn(...args))
        }
    }
    removeSub(key,fn){
        if(this.events[key]){
            let index = this.events[key].indexOf(fn)
            if(index!=-1)this.events[key].splice(index,1)
        }
        if(this.events[key].length==0){
            delete this.events[key]
        }
    }
    removeSubAll(key){
        if(this.events[key]){
            delete this.events[key]
        }
    }
}