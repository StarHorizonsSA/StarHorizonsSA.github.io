// main-scripts.js

window.addEventListener('load', () => {
    console.log("Page loaded");
    const logo = document.getElementById('logo');
    const mainHeading = document.querySelector('.main-heading');
    const subHeading = document.querySelector('.sub-heading');

    if (logo) {
        console.log("Logo element found:", logo);
        setTimeout(() => {
            console.log("Applying hidden class to logo");
            logo.classList.add('hidden'); // Start the fade-out animation
    
            // Wait for the fade-out animation to complete
            setTimeout(() => {
                logo.style.display = 'none'; // Remove the logo from the document flow
                const container = document.querySelector('.container');
                container.style.height = 'auto'; // Adjust the container's height
            }, 2000); // Match this timeout with the duration of the fadeOut animation
    
            mainHeading.classList.remove('hidden-heading');
            subHeading.classList.remove('hidden-heading');
        }, 2000); // Wait 2 seconds before adding the 'hidden' class
    } else {
        console.log("Logo element not found");
    }
    
});

// FUNCTIONS AND LOGIC TO HANDLE PIP NUMBERS & USER INPUT
function viewPIP() {
    // Show the loading modal
    const loadingModal = document.getElementById('loadingModal');
    const pipPromptModal = document.getElementById('pipPromptModal');
    const pipInput = document.getElementById('pipInput');
    const submitPIP = document.getElementById('submitPIP');
    const cancelPIP = document.getElementById('cancelPIP');

    loadingModal.style.display = 'block';

    // Find the largest PIP number
    findLargestPipNumber(10, function(largestPipNumber) {     //  <<-- CHANGE AS PIP FILES INCREASE
        
        // Once the largest PIP number is found, hide the loading modal and show the input modal
        loadingModal.style.display = 'none';
        pipPromptModal.style.display = 'block';

        // Handle the submission of the PIP number
        submitPIP.onclick = function() {
            const pipNumber = pipInput.value.trim();

            // Validate the input
            if (isNaN(pipNumber) || Number(pipNumber) <= 0 || pipNumber === "") {
                alert("Please enter a valid PIP number.");
            } else if (Number(pipNumber) > largestPipNumber) {
                alert(`PIP number is too large. Please enter a PIP number from 1 to ${largestPipNumber}.`);
            } else {
                const pipUrl = "PIP-" + Number(pipNumber) + ".html";

                checkFileExists(pipUrl, function(exists) {
                    if (exists) {
                        window.location.href = pipUrl;
                    } else {
                        alert("There's no file for that PIP number. Please try again.");
                    }
                });
            }
        };

        // To handle the cancel button click
        cancelPIP.onclick = function() {
            pipPromptModal.style.display = 'none';
            pipInput.value = ''; // Clear the input field
        };
    });
}

function findLargestPipNumber(maxCheck = 1000, callback) {   // Default value of 1000 if no argument is passed to function
    let largestPipNumber = 0;
    let currentCheck = 1;

    function checkNext() {
        if (currentCheck > maxCheck) {
            callback(largestPipNumber);
            return;
        }

        const pipUrl = `PIP-${currentCheck}.html`;

        checkFileExists(pipUrl, function(exists) {
            if (exists) {
                largestPipNumber = currentCheck;
            }
            currentCheck++;
            checkNext();
        });
    }

    checkNext();
}

// Helper function to check if a file exists
function checkFileExists(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.status !== 404);
        }
    };
    xhr.send();
}