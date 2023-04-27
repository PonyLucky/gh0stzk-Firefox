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
}