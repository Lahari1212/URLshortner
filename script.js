// Listen to the form submission
document.getElementById("urlForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get the long URL entered by the user
    const longUrl = document.getElementById("longUrl").value.trim();
  
    // Validate if the URL is valid
    if (!longUrl || !longUrl.startsWith("http")) {
      alert("Please enter a valid URL (must start with http or https).");
      return;
    }
  
    // Encode the long URL to create a shortened version
    const shortCode = btoa(longUrl).slice(0, 8); // Generate a unique short code
  
    // Store the mapping in localStorage
    localStorage.setItem(shortCode, longUrl);
  
    // Display the shortened URL
    const shortUrlContainer = document.getElementById("shortUrlContainer");
    const shortUrlElement = document.getElementById("shortUrl");
    const baseUrl = window.location.origin; // Get the base URL of your site
  
    shortUrlElement.href = `${baseUrl}/short/${shortCode}`; // Set the short URL
    shortUrlElement.textContent = `${baseUrl}/short/${shortCode}`; // Display the short URL
    shortUrlContainer.style.display = "block"; // Make the container visible
  });
  
  // Handle the redirection when the shortened URL is clicked
  window.addEventListener("load", function () {
    const currentUrl = window.location.href;
  
    // Check if the current URL contains a short code
    if (currentUrl.includes("/short/")) {
      const shortCode = currentUrl.split("/short/").pop(); // Extract the short code
  
      // Retrieve the original long URL from localStorage
      const longUrl = localStorage.getItem(shortCode);
  
      if (longUrl) {
        window.location.href = longUrl; // Redirect to the original long URL
      } else {
        alert("Invalid or expired short URL.");
      }
    }
  });
  