// Get the current URL
const currentURL = window.location.href;
    
// Check if the URL contains "about.html"
if (currentURL.includes("resume.html")) {
    // Add the "active" class to the "about" link
    document.getElementById("resume-link").classList.add("active");
}