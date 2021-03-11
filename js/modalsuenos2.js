// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("i2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var x13 = document.getElementById("myListpsueno").innerHTML;
img.ondblclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/suenoscc.jpg";
  captionText.innerHTML = x13;
}

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.ondblclick = function() { 
  modal.style.display = "none";
}