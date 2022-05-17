let n =10;
before =0;
after=1;
if(n>0){
    console.log("for fibonacci:");
    console.log(before);
    for(i=1;i<n;i++){
    console.log(after);
    cal = before + after;
    before = after;
    after = cal;
    }
    before =0;
    after=1;
    console.log("while fibonacci:");
    console.log(before);
    while(1<n){
    console.log(after);
    cal = before + after;
    before = after;
    after = cal;
    n--;
    }
}