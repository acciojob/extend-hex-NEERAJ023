const extendHex = (shortHex) => {
  // write your code here
	let str="";
	for(let i=0; i<shortHex.length; i++){
		if(shortHex[i]=="#"){

			str+="#";
		}
		else{
			if(str==""){
			str+="#";
				
				str+=shortHex[i];
				str+=shortHex[i];
		 }else{
				str+=shortHex[i];
				str+=shortHex[i];
		 }
		}
	}
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
