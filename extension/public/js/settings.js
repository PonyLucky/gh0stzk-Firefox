function changeSearchEngine() {
    // Get search setting
    const searchSetting = document.getElementById("settings-search").value;
    // Get form
    const form = document.getElementById("search-form");
    // Set action
    form.action = searchSetting;
    // Save search engine
    localStorage.setItem("searchEngine", searchSetting);
}

function displayBookmarksEditor() {
    // Get bookmarks editor
    const bookmarksEditor = document.getElementsByClassName("settings-content")[0];
    // Fill bookmarks editor
    fillBookmarksEditor();
    // Toggle open class
    document.getElementById("settings-bookmarks").classList.toggle("active");
    // Toggle display
    bookmarksEditor.classList.toggle("hide");
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
    let isValid = true;
    try {
        // Save bookmarks
        BOOKMARKS = JSON.parse(bookmarksEditor.value);
        // Save bookmarks to local storage
        localStorage.setItem("bookmarks", JSON.stringify(BOOKMARKS));
        // Update bookmarks
        bookmarks();
    }
    catch (e) {
        isValid = false;
        // Get error indexes
        const errorIndexes = e.message.match(/\d+/g);
        const errorLine = errorIndexes[0];
        const errorChar = errorIndexes[1];
        // Get error line
        const errorLineText = bookmarksEditor.value.split("\n")[errorLine - 1];
        // Get error char
        var errorCharText = errorLineText[errorChar - 1];
        if (errorCharText === undefined) {
            errorCharText = "end of line";
        }
        console.error(
            "Error parsing bookmarks at line " + errorLine + ", character " + errorChar + ": " + errorCharText
        );
        // Get absolute position of error char
        var errorCharAbs = errorChar - 1;
        for (var i = 0; i < errorLine - 1; i++) {
            errorCharAbs += bookmarksEditor.value.split("\n")[i].length + 1;
        }
        // Set cursor at error char
        bookmarksEditor.selectionStart = errorCharAbs;
        bookmarksEditor.selectionEnd = errorCharAbs;
        bookmarksEditor.focus();
    }
    const classToAdd = isValid ? "success" : "error";
    // Get save button
    const saveBtn = document.getElementById("settings-bookmarks-save");
    saveBtn.classList.add(classToAdd);
    setTimeout(() => {
        saveBtn.classList.remove(classToAdd);
    }, 1000);
}

function settingsFS() {
    // Clear style of editor
    document.getElementById("settings-bookmarks-edit").removeAttribute("style");
    // Toggle active class
    document.getElementById("settings-fullscreen").classList.toggle("active");
    // Toggle fullscreen class
    document.getElementById("settings").parentElement.classList.toggle("fullscreen");
}