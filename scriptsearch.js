// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Fade in effect for the search container
    const searchContainer = document.getElementById("search-container");
    searchContainer.style.opacity = 0;
    searchContainer.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      searchContainer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      searchContainer.style.opacity = 1;
      searchContainer.style.transform = "translateY(0)";
    }, 100);
  
    // Search suggestions
    const suggestions = ["Founder", "Co-Founder", "blog","about", "updates", "Social", "Chief positions", "Carrer"];
    const searchBox = document.getElementById("search-box");
    const suggestionBox = document.createElement("div");
    suggestionBox.classList.add("suggestion-box");
    searchContainer.appendChild(suggestionBox);
  
    searchBox.addEventListener("input", () => {
      const input = searchBox.value.toLowerCase();
      suggestionBox.innerHTML = ""; // Clear previous suggestions
  
      if (input) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(input));
        filteredSuggestions.forEach(item => {
          const suggestionItem = document.createElement("div");
          suggestionItem.textContent = item;
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.addEventListener("click", () => {
            searchBox.value = item; // Set the input to the clicked suggestion
            suggestionBox.innerHTML = ""; // Clear suggestions
          });
          suggestionBox.appendChild(suggestionItem);
        });
      }
    });
  
    // Add event listener for the search button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", () => {
      const query = searchBox.value.trim();
  
      if (query) {
        showLoadingAnimation();
        // Simulate a search action (you can replace this with actual search logic)
        setTimeout(() => {
          alert(`Searching for: ${query}`);
          searchBox.value = ""; // Clear the input after search
          suggestionBox.innerHTML = ""; // Clear suggestions
          hideLoadingAnimation();
        }, 1000); // Simulate a delay for loading
      } else {
        alert("Please enter a search term.");
      }
    });
  
    // Add event listener for the Enter key in the search box
    searchBox.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        searchButton.click(); // Trigger the search button click
      }
    });
  
    // Add hover effect for the footer
    const footer = document.querySelector("footer");
    footer.addEventListener("mouseenter", () => {
      footer.style.transform = "translateY(-2px)";
    });
  
    footer.addEventListener("mouseleave", () => {
      footer.style.transform = "translateY(0)";
    });
  
    // Smooth scroll to footer
    const scrollToFooterButton = document.createElement("button");
    scrollToFooterButton.textContent = "Scroll to Footer";
    scrollToFooterButton.classList.add("scroll-button");
    document.body.appendChild(scrollToFooterButton);
  
    scrollToFooterButton.addEventListener("click", () => {
      footer.scrollIntoView({ behavior: "smooth" });
    });
  
    // Theme toggle functionality
    const themeToggleButton = document.createElement("button");
    themeToggleButton.textContent = "Theme";
    themeToggleButton.classList.add("theme-toggle-button");
    document.body.appendChild(themeToggleButton);
  
    themeToggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  });
  
  // Function to show loading animation
  function showLoadingAnimation() {
    const loadingAnimation = document.createElement("div");
    loadingAnimation.classList.add("loading-animation");
    loadingAnimation.textContent = "Loading...";
    document.body.appendChild(loadingAnimation);
  }
  
  // Function to hide loading animation
  function hideLoadingAnimation() {
    const loadingAnimation = document.querySelector(".loading-animation");
    if (loadingAnimation) {
      loadingAnimation.remove();
    }
  }
  