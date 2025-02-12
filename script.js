// script.js

// Array of phrases to cycle through
const phrases = [
    "Are you sure?",
    "Are you really sure??",
    "Lah:>",
    "Susunugin ko bahay nyo sige",
    "please baby T^T",
    "I will be sad if you say no",
    "Sad everday everynight",
    "May iba ka na ba?",
    "Mamalasin ka kapag hindi ka nag yes!",
    "Joke, iloveyou ^^"
];

// Variable to track the current phrase index
let currentPhraseIndex = 0;
let finishedCycling = false; // Track if the cycle should stop

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif instantly
        });
    } else if (option === 'no') {
        // Check if the cycle is finished, if not, continue cycling through phrases
        if (!finishedCycling) {
            // Change text on the "No" button to the next phrase in the array
            document.getElementById('no-button').innerText = phrases[currentPhraseIndex];

            // Update the phrase index to cycle through
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

            // Increase font size of "Yes" button
            var yesButton = document.getElementById('yes-button');
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2; // Increase font size by *2px
            yesButton.style.fontSize = newSize + 'px';

            // Change the image to sadgif when "No" is clicked
            displaySadGif();
        }

        // Stop cycling after the last phrase
        if (currentPhraseIndex === phrases.length - 1) {
            finishedCycling = true;
            // Hide the "No" button after the last phrase
            document.getElementById('no-button').style.display = 'none'; 
            // You could also hide it earlier if needed
        }
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}


// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// // Function to display the cat-heart.gif and text when "Yes" is clicked
// function displayCatHeart() {
//     // Clear existing content in the image container
//     document.getElementById('image-container').innerHTML = '';
    
//     // Get the container where the image will be displayed
//     var imageContainer = document.getElementById('image-container');
    
//     // Create a new Image element for the cat-heart
//     var catHeartImage = new Image();
//     // Set the source (file path) for the cat-heart image
//     catHeartImage.src = 'catflower.gif'; // Assuming the cat image is named "catflower.gif"
//     // Set alternative text for the image (for accessibility)
//     catHeartImage.alt = 'Cat Flower';
    
//     // Create a new <p> element to display the text
//     var textElement = document.createElement('p');
//     textElement.innerText = "I knew you would say yes!";
//     textElement.style.textAlign = "center"; // Center the text
//     textElement.style.fontSize = "24px"; // Adjust text size
//     textElement.style.fontWeight = "bold"; // Make text bold
//     textElement.style.color = "#ff69b4"; // Optional: Set a pink color for the text

//     // When the cat-heart image is fully loaded, add it to the image container
//     catHeartImage.onload = function() {
//         imageContainer.appendChild(catHeartImage);  // Add the cat-heart image
//         imageContainer.appendChild(textElement);   // Add the "I knew you would say yes!" text
//         // Hide the options container
//         document.getElementById('options').style.display = 'none';
//     };
// }
// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'catflower.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}


// Function to display the sad image when "No" is clicked
function displaySadGif() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the sad gif
    var sadImage = new Image();
    // Set the source (file path) for the sad image
    sadImage.src = 'cutecat.gif'; // Assuming the sad image is named "sadgif.gif"
    // Set alternative text for the image (for accessibility)
    sadImage.alt = 'Sad Cat';
    // When the sad image is fully loaded, add it to the image container
    sadImage.onload = function() {
        imageContainer.appendChild(sadImage);
    };
}

// Function to display the cat-heart.gif when "Yes" is clicked
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'catheart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();

