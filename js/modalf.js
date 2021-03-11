// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("pg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var x6 = document.getElementById("myListpg").innerHTML;
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = x6;
}

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}