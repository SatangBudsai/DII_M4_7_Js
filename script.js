let n = 97;
for(i=2;i<=n;i++){
    check = true;
    for(j=2;j<i;j++){
        if(i%j == 0){
            check=false;
            break;
        }
    }
    if(check == true){
        console.log(i+" prime number");
    }
}