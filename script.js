//aleart arrow function
ok.addEventListener('click', () => alert('let me see ...'));

// alert cancel 'notok'
function alert2() {    
    alert('not ok ...');
}
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', alert2);

//alert showdate ''
showDate.addEventListener('click', 
    function() {
    document.getElementById('emptySpace').innerText = Date();
});