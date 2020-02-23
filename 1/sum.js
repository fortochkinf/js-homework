sum = (x) => {
    if (this.store === undefined){
        this.store = 0;
    }
    if (x === undefined){
        return this.store;
    }
    this.store+=x;
    return undefined;
}
