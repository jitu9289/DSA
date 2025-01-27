function fib(n){
     if(n<=0){
        return 0;
     }
     if(n==1){
        return 1
     }

     const ans=fib(n-1)+fib(n-2);
     return ans;
}

console.log(fib(5));