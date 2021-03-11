// JavaScript Document
  

  function show(){
  document.getElementById("descripcionvideo").style.display = "block";
  var aud = document.getElementById("music");
  var vidcomm = document.getElementById("myListvid").innerHTML;
  var destino = document.getElementById("comentariovideo");
  destino.innerHTML = vidcomm;
  if (!aud.paused){
    aud.pause();
  }
  }