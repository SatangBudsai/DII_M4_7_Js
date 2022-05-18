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
console.log("sum money all employee : "+average_age);
