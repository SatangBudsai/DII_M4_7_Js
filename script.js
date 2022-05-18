let employee = [5];
employee[0] = {
    'name' : 'นาย ก นามสมมติ',
    'age' : 68,
    'money' : 75900,
}
employee[1] = {
    'name' : 'นาย ข นามสมมติ',
    'age' : 35,
    'money' : 55400,
}
employee[2] = {
    'name' : 'นาย ค นามสมมติ',
    'age' : 51,
    'money' : 81000,
}
employee[3] = {
    'name' : 'นาย ง นามสมมติ',
    'age' : 76,
    'money' : 111000,
}
employee[4] = {
    'name' : 'นาย จ นามสมมติ',
    'age' : 22,
    'money' : 20500,
}
let sum_money=0;
for (i=0;i<employee.length;i++){
    sum_money = sum_money+employee[i].money;
}
console.log("sum money all employee : "+sum_money);
let average_age=0;
for (i=0;i<employee.length;i++){
    average_age = average_age+employee[i].age;
}
average_age = average_age/employee.length;
console.log("average age all employee : "+average_age);

sum_tax = 0;
for(i=0;i<employee.length;i++){
    money = employee[i].money*12;
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
    sum_tax = sum_tax + tax;
}
average_tax =0;
average_tax = sum_tax/employee.length;
console.log("average tax all employee : "+average_tax);