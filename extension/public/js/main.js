// On window load
window.onload = function() {
    main();
    nav();
    bookmarks();

    // Handle theme button
    document.getElementById("theme").addEventListener("click", changeTheme);
}

// Main function
function main() {
    // Get input
    const searchInput = document.getElementById("search");
    // Set focus
    searchInput.focus();

    // List of alphanumeric keys
    const keys = "abcdefghijklmnopqrstuvwxyz0123456789";
    // Add event listener to body, when key is pressed
    document.body.addEventListener("keydown", function(e) {
        // If key is alphanumeric
        if (keys.includes(e.key.toLowerCase())) {
            // Focus on input
            searchInput.focus();
        }
    });
}