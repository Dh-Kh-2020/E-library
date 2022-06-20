const login         = document.getElementById("login");
const login__modal  = document.getElementById("login__modal");
const close__login  = document.getElementById("close__login");

login.addEventListener('click', ()=>{
    login__modal.style.display = "block";
});

close__login.addEventListener('click', ()=>{
    login__modal.style.display = "none";
});
