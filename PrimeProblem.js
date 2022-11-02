let flag = false;
let num = 13;

for(let i = 0; i <= n; i++){
	if(num % i == 0){
		flag = true;
	}else{
		falg = false;
	}

if(flag == true){
	console.log("Prime");
	}else{
	console.log("Not Prime");
	}