// On window load
window.onload = function() {
    main();
    nav();
    bookmarks();
    handlers();
    // DEBUG
    personalize();
    displayBookmarksEditor();
}

// Main function
function main() {
    // Get input
    const searchInput = document.getElementById("search");
    // Set focus
    searchInput.focus();

    // List of alphanumeric keys
    const keys = "abcdefghijklmnopqrstuvwxyz0123456789";
    const inputTags = ["input", "textarea", "select", "button"];
    // Add event listener to body, when key is pressed
    document.body.addEventListener("keydown", function(e) {
        // If target is input, return
        if (inputTags.includes(e.target.tagName.toLowerCase())) return;
        // If key is alphanumeric
        if (keys.includes(e.key.toLowerCase())) {
            // Focus on input
            searchInput.focus();
        }
    });
}

function handlers() {
    document.getElementById("personalize").addEventListener("click", personalize);
    document.getElementById("settings-close").addEventListener("click", personalize);
    document.getElementById("settings-theme-switch").addEventListener("click", changeTheme);
    document.getElementById("settings-search").addEventListener("click", changeSearchEngine);
    document.getElementById("settings-bookmarks").addEventListener("click", displayBookmarksEditor);
}