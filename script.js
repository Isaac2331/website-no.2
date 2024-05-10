document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetch form values
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Here, you can implement code to handle form submission, like sending the data to a server or displaying a confirmation message.
    // For now, let's just log the values to the console.
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Optionally, you can clear the form fields after submission
    document.getElementById("contact-form").reset();
});
// Create an image element
var img = document.createElement("img");
img.src = "your-image-path.jpg"; // Replace "your-image-path.jpg" with the actual path to your image
img.alt = "Owner's Image"; // Provide alternative text for the image for accessibility

// Add the image before the owner's name
var ownerName = document.getElementById("owner-name");
ownerName.parentNode.insertBefore(img, ownerName);

// Create an image element
var img = document.createElement("img");
img.id = "owner-image";
img.src = "your-image-path.jpg"; // Replace "your-image-path.jpg" with the actual path to your image
img.alt = "Owner's Image"; // Provide alternative text for the image for accessibility

// Add the image before the owner's name
var ownerName = document.getElementById("owner-name");
ownerName.parentNode.insertBefore(img, ownerName);

// JavaScript to resize the owner's image with correct width and height
window.addEventListener("load", function() {
    var img = document.getElementById("owner-image");
    var imgWidth = img.naturalWidth; // Get the natural width of the image
    var imgHeight = img.naturalHeight; // Get the natural height of the image

    // You can set the desired width and height for the image here
    var desiredWidth = 200; // Set the desired width in pixels
    var desiredHeight = 200; // Set the desired height in pixels

    // Calculate the aspect ratio of the image
    var aspectRatio = imgWidth / imgHeight;

    // Calculate the new width and height while maintaining the aspect ratio
    var newWidth, newHeight;
    if (aspectRatio >= 1) {
        // Landscape or square image
        newWidth = Math.min(desiredWidth, imgWidth);
        newHeight = newWidth / aspectRatio;
    } else {
        // Portrait image
        newHeight = Math.min(desiredHeight, imgHeight);
        newWidth = newHeight * aspectRatio;
    }

    // Set the new width and height for the image
    img.style.width = newWidth + "px";
    img.style.height = newHeight + "px";
});

// JavaScript for opening social media links in a new tab
window.addEventListener("DOMContentLoaded", function() {
    var socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var url = this.href;
            window.open(url, "_blank");
        });
    });
});

// JavaScript for opening social media links in a new tab
window.addEventListener("DOMContentLoaded", function() {
    var socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var url = this.href;
            window.open(url, "_blank");
        });
    });
});
