// ########################## MODAL | LOGIN & REGISTER ##########################

// ========== Login modal
const login         = document.getElementById("login");
const login__modal  = document.getElementById("login__modal");
const close__login  = document.getElementById("close__login");

login.addEventListener('click', ()=>{
    login__modal.style.display = "block";
});

close__login.addEventListener('click', ()=>{
    login__modal.style.display = "none";
});

// When the user clicks anywhere outside of login modal, close it
window.addEventListener('click', function(event) {
    var log_modal = document.getElementById('login__modal');

    if (event.target == log_modal) {
        log_modal.style.display = "none";
    }
});

// ========== Register modal
const register          = document.getElementById("register");
const register__modal   = document.getElementById("register__modal");
const close__register   = document.getElementById("close__register");
const re_login          = document.getElementById("re_login");

register.addEventListener('click', ()=>{
    login__modal.style.display = "none";
    register__modal.style.display = "block";
});

re_login.addEventListener('click', ()=>{
    login__modal.style.display = "block";
    register__modal.style.display = "none";
});

close__register.addEventListener('click', ()=>{
    register__modal.style.display = "none";
});

// When the user clicks anywhere outside of register modal, close it
window.addEventListener('click', function(event) {
    var reg_modal = document.getElementById('register__modal');

    if (event.target == reg_modal) {
        reg_modal.style.display = "none";
    }
});

// ########################## ######################## ##########################