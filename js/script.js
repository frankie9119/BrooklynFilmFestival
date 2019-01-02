
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



// Validate the inputted email address via regex
document.getElementById("emailAddress").addEventListener("blur", function (e) {
    // matches an xx@yyy.zzz format
    var emailRegex = /.+@.+\..+/;
    var emailAddressValidity = "";
    if (!emailRegex.test(e.target.value)) {
        emailAddressValidity = "Invalid address";
    }
    document.getElementById("emailHelp").textContent = emailAddressValidity;
});


	