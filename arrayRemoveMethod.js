Array.prototype.remove=function(index){
    for(let i=index;i<this.length-1;i++){
        this[i]=this[i+1];
    }
    this.length = this.length-1;
    return this;
}

