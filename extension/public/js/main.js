// On window load
window.onload = async function() {
    // Initialize
    init();
    // Run other functions
    main();
    nav();
    bookmarks();
    handlers();
    // Await feed
    await feed();
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
    function attach(id, handler, event = "click") {
        document.getElementById(id).addEventListener(event, handler);
    }
    attach("personalize", personalize);
    attach("settings-theme-switch", changeTheme);
    attach("settings-search", changeSearchEngine);
    attach("settings-time-mode", changeTimeMode);
    attach("settings-time-format", changeTimeFormat);
    attach("settings-bookmarks", displayBookmarksEditor);
    attach("settings-bookmarks-save", saveBookmarksEditor);
    attach("settings-news", displayNewsEditor);
    attach("settings-news-save", saveNewsEditor);
    attach("settings-import", importSettings);
    attach("settings-export", exportSettings);
    attach("settings-fullscreen", settingsFS);
    attach("settings-close", personalize);
}

function init() {
    // Get current theme
    const theme = localStorage.getItem("theme");
    // Get current search engine
    const searchEngine = localStorage.getItem("searchEngine");
    // Get current time mode
    const timeMode = localStorage.getItem("timeMode");
    // Get current time format
    const timeFormat = localStorage.getItem("timeFormat");
    // Get current bookmarks
    const bookmarks = localStorage.getItem("bookmarks");
    // Get current news
    const news = localStorage.getItem("news");
    // Set theme
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        applyTheme();
    }
    // Set search engine
    if (searchEngine && searchEngine != "null") {
        document.getElementById("search-form").action = searchEngine;
        document.getElementById("settings-search").value = searchEngine;
    }
    // Set time mode
    if (timeMode && timeMode != "null") {
        document.getElementById("time").setAttribute("data-mode", timeMode);
        document.getElementById("settings-time-mode").value = timeMode;
    }
    // Set time format
    if (timeFormat && timeFormat != "null") {
        document.getElementById("time").setAttribute("data-format", timeFormat);
        document.getElementById("settings-time-format").textContent = timeFormat;
    }
    // Set bookmarks
    if (bookmarks && bookmarks != "null") {
        try {
            BOOKMARKS = JSON.parse(bookmarks);
        }
        catch (e) {
            console.error(e);
            // Reset bookmarks in local storage
            localStorage.setItem("bookmarks", JSON.stringify(BOOKMARKS));
        }
    }
    // Set news
    if (news && news != "null") {
        try {
            FEEDS = JSON.parse(news);
        }
        catch (e) {
            console.error(e);
            // Reset news in local storage
            localStorage.setItem("news", JSON.stringify(FEEDS));
        }
    }
    // Init CORS
    CORS.init();
}