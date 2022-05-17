let n = 91;
let check = true;
for(i=2;i<n;i++){
    if(n%i == 0){
        check = false;
        break;
    }
}
console.log(n+" Prime number ? : "+check);
let count=2;
while(count < n){
    if(n%i == 0){
        check = false;
        break;
    }
    count++;
}
console.log(n+" Prime number ? : "+check);