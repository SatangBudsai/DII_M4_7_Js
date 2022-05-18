let cmu = {
    'name':'chiang main university',
    'lat' : 18.8046735,
    'long':98.9528446,
}
let maya = {
    'name':'maya',
    'lat' : 18.8046735,
    'long':98.9528446,
}
let cenfest = {
    'name':'central chiang mai',
    'lat' : 18.8046735,
    'long':98.9528446,
}
console.log(cmu);
console.log(cmu.name+' '+cenfest.name);
console.log(cmu['name']===cmu.name);

let place = [cmu, maya, cenfest]
console.log(place)

// collection mix array
let place2 = [3];

place2[0] = {
    'name':'chiang main university',
    'lat' : 18.8046735,
    'long':98.9528446,
}
place2[1] = {
    'name':'maya',
    'lat' : 18.8046735,
    'long':98.9528446,
}
place2[2] = {
    'name':'central chiang mai',
    'lat' : 18.8046735,
    'long':98.9528446,
}
console.log(place2[0].name)
console.log(place2[1].name)
console.log(place2[2].name)