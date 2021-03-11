// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("pi");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var x8 = document.getElementById("myListpi").innerHTML;
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = x8;
}

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}