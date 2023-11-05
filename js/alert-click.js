
        // Function to hide the custom modal
        function hidealertModal() {
          document.getElementById("alertModal").style.display = "none";
        }
    
        // Show the custom modal when right-clicking
        document.addEventListener('contextmenu', function (e) {
          e.preventDefault();
          document.getElementById("alertModal").style.display = "block";
    
          // Add event listener for the Escape key
          document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
              // Hide the custom modal when Esc key is pressed
              hidealertModal();
            }
          });
    
          // Add event listener for clicking anywhere else with the mouse
          document.addEventListener('click', function (event) {
            // Check if the click occurred outside the modal
            if (event.target !== document.getElementById("alertModal")) {
              hidealertModal();
            }
          });
        });
    