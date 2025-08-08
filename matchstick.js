function matchHouses(step) {
	 if(step == 0){
      return 0;
   }
	 let value = 6+((step-1)*5)	;
   return value;
}

console.log(matchHouses(4));
console.log(matchHouses(87));