// JavaScript Document

function toggleSound() {
  var audioElem = document.getElementById("music");
  var logoon = document.getElementById("encendida");
  var logooff = document.getElementById("apagada");
  if (audioElem.paused){
    audioElem.play();
    logoon.style.display = "inline";
    logooff.style.display = "none";}
  else{
    audioElem.pause();
    logoon.style.display = "none";
    logooff.style.display = "inline";}
}