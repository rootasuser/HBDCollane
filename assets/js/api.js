const audio = document.getElementById('background-music');
audio.onerror = function() {
    console.error('Error loading audio file.');
};