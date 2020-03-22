function promiseReduce(asyncFunctions, reduce, initialValue) {
	return new Promise(async resolve => {
		result = [];
		for(const promise of asyncFunctions){
			result.push(await promise());
		}
		resolve(result.reduce(reduce, initialValue));
	});
}


var fn1 = () => {
console.log('fn1')
return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 4000)
})

promiseReduce(
[fn1, fn2],
function (memo, value) {
console.log('reduce')
return memo * value
},
1
)
.then(console.log);
