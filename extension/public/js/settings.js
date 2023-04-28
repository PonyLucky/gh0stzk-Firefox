function changeSearchEngine() {
    // Get search setting
    const searchSetting = document.getElementById("settings-search").value;
    // Get form
    const form = document.getElementById("search-form");
    // Set action
    form.action = searchSetting;
}

function displayBookmarksEditor() {
    // Get bookmarks editor
    const bookmarksEditor = document.getElementsByClassName("settings-content")[0];
    // Switch display
    switchHide(bookmarksEditor);
}