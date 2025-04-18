(function () {
  // Keep track of toggle icons already initialized to prevent double binding
  const initializedToggles = new Set();

  function setupToggle(passwordId, toggleId) {
    console.log("Setting up toggle for", passwordId, toggleId);
    const passwordField = document.getElementById(passwordId);
    const toggleIcon = document.getElementById(toggleId);

    if (!passwordField || !toggleIcon) {
      console.log(
        "Could not find elements:",
        passwordField ? "Password field found" : "Password field NOT found",
        toggleIcon ? "Toggle icon found" : "Toggle icon NOT found"
      );
      return;
    }

    // Skip if already initialized
    const uniqueId = passwordId + "-" + toggleId;
    if (initializedToggles.has(uniqueId)) {
      console.log("Toggle already initialized:", uniqueId);
      return;
    }

    console.log("Found both elements, setting up click handler");

    // Ensure password is initially of type password
    passwordField.type = "password";
    toggleIcon.className = "fa fa-eye-slash password-toggle";

    // Remove any existing click listeners
    toggleIcon.removeEventListener("click", toggleHandler);

    // Add click event with proper handler
    toggleIcon.addEventListener("click", toggleHandler);

    // Mark as initialized
    initializedToggles.add(uniqueId);

    // The actual handler function
    function toggleHandler(e) {
      console.log("Toggle clicked!");

      // Stop event propagation and prevent default
      e.preventDefault();
      e.stopPropagation();

      // Toggle password visibility
      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.className = "fa fa-eye password-toggle";
        console.log("Changed to text type and eye icon");
      } else {
        passwordField.type = "password";
        toggleIcon.className = "fa fa-eye-slash password-toggle";
        console.log("Changed to password type and eye-slash icon");
      }

      return false;
    }

    // Also add for testing
    console.log("Adding test click function to window");
    window.testPasswordToggle = function () {
      console.log("Manual toggle triggered");
      const currentType = passwordField.type;
      passwordField.type = currentType === "password" ? "text" : "password";
      toggleIcon.className =
        currentType === "password"
          ? "fa fa-eye password-toggle"
          : "fa fa-eye-slash password-toggle";
    };
  }

  // Function to run after DOM is loaded
  function initToggles() {
    console.log("Initializing password toggles");
    setupToggle("password", "password_toggle_public");

    // These are only for signup/reset pages
    setupToggle("password", "password_toggle_signup");
    setupToggle("confirm_password", "password_toggle_confirm");
    setupToggle("password", "password_toggle_reset");
    setupToggle("confirm_password", "password_toggle_reset_confirm");

    console.log("Password toggles initialized");
  }

  // Make sure DOM is fully loaded
  if (document.readyState === "loading") {
    console.log("Document still loading, adding event listener");
    document.addEventListener("DOMContentLoaded", initToggles);
  } else {
    console.log("Document already loaded, running init directly");
    initToggles();
  }

  // Also try again after a delay to be sure
  setTimeout(initToggles, 500);
})();
