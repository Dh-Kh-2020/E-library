// ======= Modal login ========

const modal = document.getElementById("myModal");  // Get the modal
const btn = document.getElementById("myBtn");      // Get the button that opens the modal
const span = document.getElementsByClassName("close")[0];    // Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ======= Offer Down Counter =======

const dateDownCounter = new Date("Jan 30, 2022 23:59:59").getTime();

// update the count every 1000ms (1s)
const updatedTime = setInterval(function(){
  const now = new Date().getTime();
  const interval = dateDownCounter - now;

  const days = Math.floor(interval / (1000 * 60 * 60 * 24));
  const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((interval % (1000 * 60)) / 1000);

  document.getElementById("offer-counting1").innerHTML = days + "ي " + hours + "س " + minutes + "د " + seconds + "ث ";
  document.getElementById("offer-counting2").innerHTML = days + "ي " + hours + "س " + minutes + "د " + seconds + "ث ";
  document.getElementById("offer-counting3").innerHTML = days + "ي " + hours + "س " + minutes + "د " + seconds + "ث ";
  document.getElementById("offer-counting4").innerHTML = days + "ي " + hours + "س " + minutes + "د " + seconds + "ث ";
  document.getElementById("offer-counting5").innerHTML = days + "ي " + hours + "س " + minutes + "د " + seconds + "ث ";

  if (interval < 0) {
    clearInterval(x);
    document.getElementById("offer-counting1").innerHTML = "time Expoired";
    document.getElementById("offer-counting2").innerHTML = "time Expoired";
    document.getElementById("offer-counting3").innerHTML = "time Expoired";
    document.getElementById("offer-counting4").innerHTML = "time Expoired";
    document.getElementById("offer-counting5").innerHTML = "time Expoired";
  }
}, 1000);
