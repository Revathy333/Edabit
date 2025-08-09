function mubashirFunction(a, b) {
	if(a < 10 && b < 10){
        return a*b;
    }else if(a % 10 == 0 && b % 10 == 0){
        let a1 =  String(a).replace(/0/g,"");
        let b1 = String(b).replace(/0/g,"");
        return a1*b1;
    }else if(a > 10 && b > 10){
        let c = Math.min(a,b);
        let str = c.toString();
        let d = '';
        d += (str.charAt(str.length-1,str.length-2));
        return d;
    }
}
console.log((mubashirFunction(12,34)));
