function findSum(array,key){
    let sum=0;
    for (i=0;i<array.length;i++){
    sum = sum+array[i][key];
    }
    return sum;
}
function calTax(array,key){
    sum_tax = 0;
    for(i=0;i<array.length;i++){
        money = array[i][key]*12;
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
    average_tax = sum_tax/array.length;
    return average_tax;
}
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

sumMoney = findSum(employee,'money');
console.log("sum money all employee : "+sumMoney);

age_average = findSum(employee,'age');
console.log("average age all employee : "+age_average/employee.length);

average_tax = calTax(employee,'money');
console.log("average tax all employee : "+average_tax);