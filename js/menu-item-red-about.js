        // Get the current URL
        const currentURL = window.location.href;
    
        // Check if the URL contains "about.html"
        if (currentURL.includes("about.html")) {
            // Add the "active" class to the "about" link
            document.getElementById("about-link").classList.add("active");
        }