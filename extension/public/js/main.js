// On window load
window.onload = function() {
    // Initialize
    init();
    // Run other functions
    main();
    nav();
    bookmarks();
    handlers();
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
    document.getElementById("settings-theme-switch").addEventListener("click", changeTheme);
    document.getElementById("settings-search").addEventListener("click", changeSearchEngine);
    document.getElementById("settings-bookmarks").addEventListener("click", displayBookmarksEditor);
    document.getElementById("settings-bookmarks-save").addEventListener("click", saveBookmarksEditor);
    document.getElementById("settings-fullscreen").addEventListener("click", settingsFS);
    document.getElementById("settings-close").addEventListener("click", personalize);
}

function init() {
    // Get current theme
    const theme = localStorage.getItem("theme");
    // Get current search engine
    const searchEngine = localStorage.getItem("searchEngine");
    // Get current bookmarks
    const bookmarks = localStorage.getItem("bookmarks");
    // Set theme
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        applyTheme();
    }
    // Set search engine
    if (searchEngine) {
        document.getElementById("search-form").action = searchEngine;
    }
    // Set bookmarks
    if (bookmarks) {
        BOOKMARKS = JSON.parse(bookmarks);
    }
}