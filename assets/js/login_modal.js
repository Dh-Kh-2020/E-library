const login         = document.getElementById("login");
const login__modal  = document.getElementById("login__modal");
const close__login  = document.getElementById("close__login");

login.addEventListener('click', ()=>{
    login__modal.style.display = "block";
});

close__login.addEventListener('click', ()=>{
    login__modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('login__modal');

    if (event.target == modal) {
        modal.style.display = "none";
    }
});