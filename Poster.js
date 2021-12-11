// $('#dudukiki').css("background","blue")

// let bgColor =  $('#dudukiki').css("background-color")

// $('title').text("Avan crazy late experiments")

var pix = document.getElementsByClassName("pixel");
for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}

alert("scale the screen (PC only)")