const Check_divisibility = (N) => {
    let num;
  if (N % 6==0 && N % 9==0){
     num = "Divisible by both";
  }
   else{
     num = "Not Divisible by both";
   }
    
    return num;
};