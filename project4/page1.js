$(document).ready(function(){

	alert('hi');

	function changeImage() {
	    var image = document.getElementById('myImage');
	    if (image.src.match("box") {
	        image.src = "gift-blue.png";
	    } else {
	        image.src = "blue-open.gif";
	    }
	});

	changeImage();

});