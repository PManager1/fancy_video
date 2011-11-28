//video_gallery.js

$(document).ready(function(){
	
	$('a.videoLink').each(function(){
		
	var thumbnailFilePath = 'http://localhost:3000/assets/' + $(this).attr('videofile') + '.jpg'  //This will get the file path of the thumbnail
	var videoCaption = $(this).attr('videocaption');  // it will get the caption of video
		
		$(this).css('background-image','url('+thumbnailFilePath+')');  // setting css properties on the object
		$(this).html('<div class="caption">'+videoCaption+'<div/><img class="play" src="play_icon.png/>" >');
		
	});
});


// 
// $(document).ready(function() {
// 
// 	// Set up link thumbnails
// 	$('a.videoLink').each(function(){
// 		
// 		var thumbnailFilePath = 'video/' + $(this).attr('videofile') + '.jpg';
// 		var videoCaption = $(this).attr('videocaption');
// 		
// 		$(this).css('background-image','url('+thumbnailFilePath+')');
// 		$(this).html('<div class="caption">'+videoCaption+'</div><img class="play" src="images/play_icon.png" />');
// 	
// 	});




