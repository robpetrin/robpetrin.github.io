var audio = new Audio("../audio/TWC_080318.mp3");

$('#audio-button').on("click",function(){
  if($('#play-pause-button').hasClass('fa-play'))
   {
     $('#play-pause-button').removeClass('fa-play');
     $('#play-pause-button').addClass('fa-pause');
     audio.play();
   }
  else
   {
     $('#play-pause-button').removeClass('fa-pause');
     $('#play-pause-button').addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};
