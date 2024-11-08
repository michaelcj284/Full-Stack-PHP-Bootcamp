let header = document.querySelector('header');

window.addEventListener('scroll', function(){
   if(scrollY > 80){
        header.style.width = '100%';
        header.style.borderRadius = '0px';
        header.style.background = 'black';
   }else{
        header.style.width = '90%';
        header.style.borderRadius = '50px';
        header.style.background = 'skyblue';
   }
})