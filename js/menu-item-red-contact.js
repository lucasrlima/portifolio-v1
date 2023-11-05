    // Get the current URL
    const currentURL = window.location.href;
    
    // Check if the URL contains "about.html"
    if (currentURL.includes("contact.html")) {
        // Add the "active" class to the "about" link
        document.getElementById("contact-link").classList.add("active");
    }