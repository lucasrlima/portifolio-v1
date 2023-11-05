        // Get the current URL
        const currentURL = window.location.href;
    
        // Check if the URL contains "about.html"
        if (currentURL.includes("fotos-index.html")) {
            // Add the "active" class to the "about" link
            document.getElementById("fotos-link").classList.add("active");
        }