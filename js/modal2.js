// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

// Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("modal2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}