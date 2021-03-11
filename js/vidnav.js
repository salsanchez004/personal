// JavaScript Document


function opensala() {
  document.getElementById("salavideo").style.width = "100%";
	document.getElementById("salavideo").style.height = "100%";
}

function closesala() {
  document.getElementById("salavideo").style.width = "0";
	var vid = document.getElementById("primitivo");
  if (!vid.paused){
    vid.pause();
  }
	document.getElementById("salavideo").style.height = "0";
}