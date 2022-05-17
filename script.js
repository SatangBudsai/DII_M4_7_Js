let money = 999999;
let tax = 0;
if (money > 0 && money < 150000){
    tax = 0;
}else if (money < 300000){
    tax = (money-150000)*0.05;
}else if (money < 500000){
    tax = ((money-300000)*0.1)+7500;
}else if (money < 750000){
    tax = ((money-500000)*0.15)+27500;
}else if (money < 1000000){
    tax = ((money-750000)*0.2)+65000;
}else if (money < 2000000){
    tax = ((money-1000000)*0.25)+115000;
}else if (money <= 5000000){
    tax = ((money-2000000)*0.30)+365000;
}else if (money > 500000){
    tax = ((money-5000000)*0.35)+1265000;
}
console.log("Total money = "+money+"\nTax = "+tax)