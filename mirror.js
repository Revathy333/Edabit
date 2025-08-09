function mirror(arr) {
	let arr1 = arr.slice(0,arr.length-1).reverse();
    arr.push(arr1);
    return arr.flat();
}

let arr = [1,2,3,4];
console.log(mirror(arr));