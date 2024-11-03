window.onload = function() {
    // Try setting autoplay by updating the iframe's src attribute after page load
    const video = document.getElementById('backgroundVideo');
    video.src += "&autoplay=1"; // Ensures autoplay if browser restrictions allow
}