
function checkPrime(number){
let count = 0;
for(let i = 1; i <= number; i++){
	if(number % i == 0){
		count++;
	}
	
	if(count == 2){
		return true;
	}else{
		return false;
	}
}
}

let answer = checkPrime(13);

if(answer == true){
	console.log("Prime Number");
}else{
	console.log("Not Prime Number");
}