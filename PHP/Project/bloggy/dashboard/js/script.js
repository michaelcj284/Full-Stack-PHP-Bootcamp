
 
let custom_box = document.querySelectorAll('#custom_amenitie_chkbox');

custom_box.forEach(custom_boxs => {
  custom_boxs.addEventListener('click', function(){
    custom_boxs.classList.toggle('customised_amenities_addclass');
    custom_boxs.parentNode.querySelector('.mainchkbox').click();
    custom_boxs.parentNode.querySelector('.fa-check').classList.toggle('customised_amenities_Chkmarkaddclass');
  })
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll('aside ul a');
const menuLength = menuItem.length;

  for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
      menuItem[i].className = "active-dash";
    }
  }

$(document).ready(function(){
    $('.fi-rr-menu-burger').on('click', function(){
        $('#left_sidebar ul a').toggleClass('list-container');
        $('#left_sidebar ul a li span').toggleClass('spa-con');
        $('#left_sidebar').toggleClass('aside-clas');
        $('#dash_logo_con span').toggleClass('logo-spa');
        $('main').toggleClass('main-cla');
        
    })

    $('header .dark-mode-switch-con .circle-switch').on('click', function(){
        $(this).toggleClass('move-switch');
        $('aside, header').toggleClass('change-to-dark');
        $('main').toggleClass('change-to-darker');
        $('#add-prop-holder p').toggleClass('changecolor');
        $('#main_container').toggleClass('main_container-dark');
        $('.fi-rr-menu-burger').toggleClass('burger-white');
        $('#li-sec').toggleClass('li-dark');
        $('aside ul a li i, aside ul a li span').toggleClass('changeicon-to-white');
        $('.active-dash i, .active-dash span').toggleClass('change-active-icon');
    })

    
});

$('.custom_chekbox').on('click', function(){
  $(this).toggleClass('custom_chekbox_active');
  $(this).children('.fa-check').toggleClass('custom_chekbox_innerimg');
  const sib = $(this).siblings('.originalchek');
  sib.trigger("click");
});

let loginSuccessModal = document.querySelector('#loginSuccess-modal');
let exitSucessIcon = document.querySelector('#exitSucessIcon');

exitSucessIcon.addEventListener('click', function(){
  loginSuccessModal.style.display = 'none';
})

setTimeout(() => {
  loginSuccessModal.style.display = 'none';
},10000);


$(document).ready(function() {
  $('select').niceSelect();
});


