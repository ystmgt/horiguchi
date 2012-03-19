// Create an array of images that you'd like to use
var images = [
	"img/top/bg1.jpg",
	"img/top/bg2.jpg",
	"img/top/bg3.jpg"
];

// A little script for preloading all of the images
// It's not necessary, but generally a good idea
$(images).each(function(){
	$('<img/>')[0].src = this; 
});

// The index variable will keep track of which image is currently showing
var index = 0;

// Call backstretch for the first time,
// In this case, I'm settings speed of 500ms for a fadeIn effect between images.
$.backstretch(images[index], {speed: 500});

// Set an interval that increments the index and sets the new image
// Note: The fadeIn speed set above will be inherited
setInterval(function() {
	index = (index >= images.length - 1) ? 0 : index + 1;
	$.backstretch(images[index]);
}, 5000);

$(document).ready(function(){
	$("#navi a").hover(function() {
		$(this).stop().animate({color: "#f46200"}, 800);
	},function() {
		$(this).stop().animate({color: "#ffffff" }, 800);
	});
});

