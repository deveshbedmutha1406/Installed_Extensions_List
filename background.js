// background.js

// Define a callback function to handle the results
function handleExtensions(extensions) {
    // Log or process the extensions as needed
    console.log(extensions);
  }
  
  // Use chrome.management.getAll to retrieve all extensions
  chrome.management.getAll(handleExtensions);
  