Array.prototype.remove=function(index){
    if (typeof index !== 'number' || index < 0 || index >= this.length) {
        throw new RangeError('Invalid index');
    }
    if(this.length==0){
        return this;
    }    
    for(let i=index;i<this.length-1;i++){
        this[i]=this[i+1];
    }
    this.length = this.length-1;
    return this;
}

