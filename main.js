/*=================Show Menu=================*/
const navMenu = document.querySelectorById('nav-menu'),
      navToggle = document.querySelectorById('nav-toggle'),
      navClose = document.querySelectorById('nav-close')

      /*=================Menu Show =================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=================Menu Hidden=================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}