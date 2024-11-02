   // Create a SoundCloud player
   var iframeElement = document.createElement('iframe');
   iframeElement.style.display = 'none'; // Hide the iframe
   iframeElement.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1948137423&auto_play=true&show_user=false';
   document.body.appendChild(iframeElement);

   // Wait for the iframe to load
   iframeElement.onload = function() {
       var widget = SC.Widget(iframeElement);
       widget.play(); // Play the audio
   };