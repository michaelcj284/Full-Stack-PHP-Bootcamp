// window.alert('hi');
let password = document.querySelector('#password');
let confirmpassword = document.querySelector('#confirmpassword');

let hide1 = document.querySelector('#hide1');
let view1 = document.querySelector('#view1');

let hide2 = document.querySelector('#hide2');
let view2 = document.querySelector('#view2');

hide1.addEventListener('click', function(){
    password.type = 'text';
    view1.style.display = 'block';
    hide1.style.display = 'none';
})

view1.addEventListener('click', function(){
    password.type = 'password';
    view1.style.display = 'none';
    hide1.style.display = 'block';
})

hide2.addEventListener('click', function(){
    confirmpassword.type = 'text';
    view2.style.display = 'block';
    hide2.style.display = 'none';
})

view2.addEventListener('click', function(){
    confirmpassword.type = 'password';
    view2.style.display = 'none';
    hide2.style.display = 'block';
})