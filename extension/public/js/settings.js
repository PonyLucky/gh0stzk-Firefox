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
    // Fill bookmarks editor
    fillBookmarksEditor();
    // Switch display
    switchHide(bookmarksEditor);
}

function fillBookmarksEditor() {
    // Get bookmarks editor textarea
    const bookmarksEditor = document.getElementById("settings-bookmarks-edit");
    // Fill textarea
    bookmarksEditor.value = JSON.stringify(BOOKMARKS, null, 2);
}

function saveBookmarksEditor() {
    // Get bookmarks editor textarea
    const bookmarksEditor = document.getElementById("settings-bookmarks-edit");
    // Save bookmarks
    BOOKMARKS = JSON.parse(bookmarksEditor.value);
    // Save bookmarks to local storage
    localStorage.setItem("bookmarks", JSON.stringify(BOOKMARKS));
    // Update bookmarks
    bookmarks();
}