document.getElementById("urlForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
  
    const longUrl = document.getElementById("longUrl").value;
    if (longUrl === "") {
      alert("Please enter a valid URL!");
      return;
    }
  
    // Simulate a shortened URL using a unique identifier
    const shortUrlCode = btoa(longUrl).slice(0, 8);  // Base64 encoding to shorten the URL
    const shortUrl = `${window.location.origin}/short/${shortUrlCode}`;  // Local shortened URL
  
    // Store the mapping (you would normally need a backend for this)
    localStorage.setItem(shortUrlCode, longUrl);
  
    // Display the shortened URL
    const shortUrlContainer = document.getElementById("shortUrlContainer");
    const shortUrlElement = document.getElementById("shortUrl");
  
    shortUrlElement.textContent = shortUrl; // Set the link text
    shortUrlElement.href = shortUrl;        // Set the link URL
    shortUrlContainer.style.display = "block"; // Show the shortened URL section
  });
  
  // Handle the redirection when the shortened URL is clicked
  window.addEventListener('load', function () {
    const currentUrl = window.location.href;
    const shortUrlPath = currentUrl.split('/short/')[1];
  
    if (shortUrlPath) {
      // If there's a short URL path, we try to find the corresponding long URL
      const longUrl = localStorage.getItem(shortUrlPath);
  
      if (longUrl) {
        window.location.href = longUrl;  // Redirect to the long URL
      } else {
        alert("URL not found!");
      }
    }
  });
  
  

  
  