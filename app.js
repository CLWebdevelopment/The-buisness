
const PRINT_AUDIO = new Audio("https://www.soundjay.com/mechanical/sounds/polaroid-camera-take-picture-02.mp3");

function myFunction() {
  document.getElementById("s1").style.animation= "print 4.5s";
  document.getElementById("b").style.animation= " show 7s 4.5s";
  document.getElementById("b").style.opacity="0";
  document.getElementById("s1").style.top="60px";
  PRINT_AUDIO.play();
}
