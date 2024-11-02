window.onload = function() {
    setTimeout(() => {
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.style.display = 'block';
        messageContainer.classList.add('show');
        
        document.body.classList.add('show-message-and-balloons');
        document.getElementById('balloon').style.display = 'none';
        typeWriterEffect(); // Start typewriter effect
        
        // Start the continuous balloon rain
        startBalloonRain();
    }, 5000); // Adjust delay as needed
};

function typeWriterEffect() {
    const message = "😍🥰 Hi, Kate Collene Alog! I have something to tell you, can you click this to proceed?";
    const messageElement = document.querySelector("#messageContainer p");
    let index = 0;

    function type() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 40); // Adjust typing speed as needed
        }
    }
    type();
}

function startBalloonRain() {
    // Create balloons at intervals
    setInterval(() => {
        for (let i = 0; i < 4; i++) { // Adjust to create multiple balloons per interval
            createBalloon();
        }
    }, 200); // Generate balloons every 200 milliseconds (adjust for speed)
}

// Array of balloon image sources
const balloonImages = [
    'assets/images/balloon1.png',
    'assets/images/balloon2.png',
    'assets/images/balloon3.png',
    'assets/images/balloon4.png',
    // Add more balloon images as needed
];

function createBalloon() {
    const balloon = document.createElement('img');
    // Select a random balloon image from the array
    balloon.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
    balloon.classList.add('raining-balloon');

    // Randomize starting position, direction, and animation duration
    const startPosition = Math.random() * window.innerWidth; // Randomize start position along the x-axis
    const direction = Math.random() * 2 - 1; // Randomize direction (-1 to 1)
    const rotation = Math.random(); // Randomize rotation factor
    const duration = Math.random() * 2 + 3; // Randomize duration between 3s and 5s

    // Use backticks to properly set the left and animation properties
    balloon.style.left = `${startPosition}px`;
    balloon.style.setProperty('--direction', direction); // Set custom property for direction
    balloon.style.setProperty('--rotation', rotation); // Set custom property for rotation
    balloon.style.animation = `shower ${duration}s linear forwards`;

    document.body.appendChild(balloon);

    // Remove balloon after animation ends to keep the DOM clean
    setTimeout(() => {
        balloon.remove();
    }, duration * 1000);
}

function proceed() {
    // Hide the previous container (assuming it's called #messageContainer)
    document.getElementById('messageContainer').style.display = 'none';

    // Show the birthday container
    const birthdayContainer = document.getElementById('birthdayContainer');
    birthdayContainer.style.display = 'flex'; // Make it visible
    birthdayContainer.style.opacity = 0; // Start with opacity 0 for container animation

    // Trigger the fade-in animation for the container
    setTimeout(() => {
        birthdayContainer.style.opacity = 1; // Fade in the container
    }, 10); // Small timeout to allow the change to take effect

    // Find the image element and add the visible class to trigger its animation
    const birthdayImage = birthdayContainer.querySelector('img');
    birthdayImage.classList.add('visible'); // Trigger the image pop-up animation
}


function proceedNext() {
    // Hide the birthday container
    document.getElementById('birthdayContainer').style.display = 'none';

    // Show the blow candle container
    const blowCandleContainer = document.getElementById('blowCandleContainer');
    blowCandleContainer.style.display = 'flex'; // Make it visible
    blowCandleContainer.style.opacity = 0; // Start with opacity 0 for container animation

    // Trigger the fade-in animation for the blow candle container
    setTimeout(() => {
        blowCandleContainer.style.opacity = 1; // Fade in the container
    }, 10); // Small timeout to allow the change to take effect

    // Find the image element and add the visible class to trigger its animation
    const candleImage = blowCandleContainer.querySelector('img');
    candleImage.classList.add('visible'); // Trigger the image pop-up animation
}


function proceedNext2() {
    // Hide the blow candle container (if you want to transition from it)
    const blowCandleContainer = document.getElementById('blowCandleContainer');
    blowCandleContainer.style.display = 'none';

    // Show the wish container
    const wishContainer = document.getElementById('wishContainer');
    wishContainer.style.display = 'flex'; // Make it visible
    wishContainer.style.opacity = 0; // Start with opacity 0 for container animation

    // Trigger the fade-in animation for the wish container
    setTimeout(() => {
        wishContainer.style.opacity = 1; // Fade in the container
    }, 10); // Small timeout to allow the change to take effect

    // Find the image element and add the visible class to trigger its animation
    const wishImage = wishContainer.querySelector('img');
    wishImage.classList.add('visible'); // Trigger the image pop-up animation
}


let balloonRainInterval; // Declare a variable to hold the interval ID

function startBalloonRain() {
    // Create balloons at intervals and save the interval ID
    balloonRainInterval = setInterval(() => {
        for (let i = 0; i < 4; i++) { // Create multiple balloons per interval
            createBalloon();
        }
    }, 200); // Generate balloons every 200 milliseconds
}

function stopBalloonRain() {
    clearInterval(balloonRainInterval); // Clear the interval to stop balloon rain
}

// Call this function to stop the balloon rain when needed
function proceedNextSpeech() {
    const wishContainer = document.getElementById('wishContainer');
    wishContainer.style.display = 'none'; // Hide previous container

    // Stop the balloon rain when proceeding to the speech container
    stopBalloonRain();
    startRainingHearts();

    const speechContainer = document.getElementById('speechContainer');
    speechContainer.style.display = 'flex'; // Make it visible
    speechContainer.style.opacity = 0; // Start with opacity 0

    // Trigger the fade-in animation for the speech container
    setTimeout(() => {
        speechContainer.style.opacity = 1; // Fade in the container
    }, 10); // Small timeout to allow the change to take effect

    // Animate heart images
    const heartImages = speechContainer.querySelectorAll('.heart-image');
    heartImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1; // Fade in each heart image one by one
        }, index * 300); // Adjust timing for sequential fade-in
    });

    // Show sub-containers after heart images appear
    setTimeout(() => {
        document.getElementById('poemContainer').style.display = 'block'; // Show poem container
        document.getElementById('speechSubContainer').style.display = 'block'; // Show speech sub-container
    }, heartImages.length * 300 + 1000); // Delay for the total fade-in time
}

function startRandomImageRain() {
    // Array of random image sources
    const randomImages = [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
        'assets/images/img4.jpeg',
    ];

    // Create images at intervals
    setInterval(() => {
        const randomImage = document.createElement('img');
        randomImage.src = randomImages[Math.floor(Math.random() * randomImages.length)];
        randomImage.classList.add('raining-balloon'); // Reuse balloon class or create a new one for raining images

        // Randomize starting position and animation duration
        const startPosition = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 3; // Randomize duration between 3s and 5s
        randomImage.style.left = `${startPosition}px`;
        randomImage.style.animation = `fall ${duration}s linear forwards`;

        document.body.appendChild(randomImage);

        // Remove the image after animation ends
        setTimeout(() => {
            randomImage.remove();
        }, duration * 1000);
    }, 500); // Generate a random image every 500 milliseconds
}


function shuffleHeartPositions() {
    const heartImages = document.querySelectorAll('.heart-image');
    const heartArray = Array.from(heartImages); // Convert NodeList to Array

    // Shuffle the array
    for (let i = heartArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [heartArray[i], heartArray[j]] = [heartArray[j], heartArray[i]]; // Swap
    }

    // Clear the container
    const parent = document.getElementById('heartImages');
    parent.innerHTML = ''; // Clear existing images

    // Reinsert images in the new order
    heartArray.forEach((img) => {
        parent.appendChild(img); // Add each image back to the container
    });
}

// Call this function to shuffle positions every 1 second
setInterval(shuffleHeartPositions, 1000); // Adjust the timing as needed


function startRainingHearts() {
    const heartSources = [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
        'assets/images/img4.jpeg',
        'assets/images/heart.png'
    ];

    setInterval(() => {
        const randomHeart = document.createElement('img');
        randomHeart.src = heartSources[Math.floor(Math.random() * heartSources.length)];
        randomHeart.classList.add('raining-heart');

        // Randomize starting position
        const startPosition = Math.random() * window.innerWidth; // Full width of the viewport
        randomHeart.style.left = `${startPosition}px`;

        // Randomize animation duration
        const duration = Math.random() * 3 + 2; // Between 2s and 5s
        randomHeart.style.animationDuration = `${duration}s`;

        // Append heart to the speech container
        const speechContainer = document.getElementById('speechContainer');
        speechContainer.appendChild(randomHeart);

        // Remove the heart after it falls
        setTimeout(() => {
            randomHeart.remove();
        }, duration * 1000);
    }, 500); // Create a new heart every 500 milliseconds
}

// Call the function when the speechContainer becomes visible
function showSpeechContainer() {
    const speechContainer = document.getElementById('speechContainer');
    speechContainer.style.display = 'block'; // Show the speech container
    startRainingHearts(); // Start the raining hearts effect
}

function proceedNextTulip() {
    const modal = document.getElementById('flowerModal');
    modal.style.display = 'block'; // Show the modal
}

function closeFlowerModal() {
    const modal = document.getElementById('flowerModal');
    modal.style.display = 'none'; // Hide the modal
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('flowerModal');
    if (event.target === modal) {
        closeFlowerModal();
    }
};
