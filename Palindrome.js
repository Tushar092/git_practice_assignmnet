function checkPalindrome(str){
let bag = "";

for(let i=str.length-1; i>=0; i--){
  bag += str[i];
    }
  
  if(bag == str){
  return "Palindrome";
   }else{
  return "NA";
    }
  }
  
  let ans = checkPalindrome("naman");
  console.log(ans);
