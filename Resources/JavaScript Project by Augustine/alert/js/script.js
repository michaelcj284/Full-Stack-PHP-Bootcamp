let ok = document.querySelector('#ok');
let alertBox_wrapper = document.querySelector('#alertBox_wrapper');

window.addEventListener('load', function(){

    setTimeout(() => {
        alertBox_wrapper.style.display = 'flex';
    }, 3000);
    
   
})

ok.addEventListener('click', function(){
    alertBox_wrapper.style.display = 'none';
})

setTimeout(() => {
    alertBox_wrapper.style.display = 'none';
}, 10000);