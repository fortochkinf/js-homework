function sum(x){
	var store = x;
	return function add(x){
		if (store === undefined){
			store = 0;
		}
		if (x === undefined){
			return store;
		}
		store+=x;
		return add;
	}

}

console.log(sum(2)(3)(4)(5)());
