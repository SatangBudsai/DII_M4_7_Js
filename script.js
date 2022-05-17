let n = 5;
let factorial = 1;
if (n != 0){
    for(i=n;i>0;i--){
        factorial = factorial*i;
        console.log(i);
    }
    console.log("for = "+factorial);
    factorial = 1;
    while(n>0){
        factorial = factorial*n;
        console.log(n);
        n--;
    }
    console.log("while = "+factorial);
}else{console.log("factorial 0 = "+factorial);}