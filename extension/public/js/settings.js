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

function changeTimeMode() {
    // Get time mode
    const timeMode = document.getElementById("settings-time-mode").value;
    // Set time mode
    document.getElementById("time").setAttribute("data-mode", timeMode);
    // Save time mode
    localStorage.setItem("timeMode", timeMode);
}

function changeTimeFormat() {
    // Get time format
    const timeFormat = document.getElementById("settings-time-format");
    // Change time format
    timeFormat.textContent = timeFormat.textContent === "12h" ? "24h" : "12h";
    // Set time format
    document.getElementById("time").setAttribute("data-format", timeFormat.textContent);
    // Save time format
    localStorage.setItem("timeFormat", timeFormat.textContent);
}

function displayBookmarksEditor() {
    // Get bookmarks editor
    const bookmarksEditor = document.getElementById("settings-bookmarks-edit").parentElement;
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

function displayNewsEditor() {
    // Get news editor
    const newsEditor = document.getElementById("settings-news-edit").parentElement;
    // Fill news editor
    fillNewsEditor();
    // Toggle open class
    document.getElementById("settings-news").classList.toggle("active");
    // Toggle display
    newsEditor.classList.toggle("hide");
}

function fillNewsEditor() {
    // Get news editor textarea
    const newsEditor = document.getElementById("settings-news-edit");
    // Fill textarea
    newsEditor.value = JSON.stringify(FEEDS, null, 2);
}

function saveNewsEditor() {
    // Get news editor textarea
    const newsEditor = document.getElementById("settings-news-edit");
    let isValid = true;
    try {
        // Save news
        FEEDS = JSON.parse(newsEditor.value);
        // Save news to local storage
        localStorage.setItem("news", JSON.stringify(FEEDS));
        // Update news
        feed();
    }
    catch (e) {
        isValid = false;
        // Get error indexes
        const errorIndexes = e.message.match(/\d+/g);
        const errorLine = errorIndexes[0];
        const errorChar = errorIndexes[1];
        // Get error line
        const errorLineText = newsEditor.value.split("\n")[errorLine - 1];
        // Get error char
        var errorCharText = errorLineText[errorChar - 1];
        if (errorCharText === undefined) {
            errorCharText = "end of line";
        }
        console.error(
            "Error parsing news at line " + errorLine + ", character " + errorChar + ": " + errorCharText
        );
        // Get absolute position of error char
        var errorCharAbs = errorChar - 1;
        for (var i = 0; i < errorLine - 1; i++) {
            errorCharAbs += newsEditor.value.split("\n")[i].length + 1;
        }
        // Set cursor at error char
        newsEditor.selectionStart = errorCharAbs;
        newsEditor.selectionEnd = errorCharAbs;
        newsEditor.focus();
    }
    const classToAdd = isValid ? "success" : "error";
    // Get save button
    const saveBtn = document.getElementById("settings-news-save");
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

function exportSettings() {
    // Get settings
    const settings = {
        theme: localStorage.getItem("theme"),
        timeMode: localStorage.getItem("timeMode"),
        timeFormat: localStorage.getItem("timeFormat"),
        searchEngine: localStorage.getItem("searchEngine"),
        bookmarks: JSON.parse(localStorage.getItem("bookmarks")),
        news: JSON.parse(localStorage.getItem("news"))
    };
    // Get settings string
    const settingsStr = JSON.stringify(settings, null, 2);
    // Create element
    const element = document.createElement("a");
    // Set href
    element.href = "data:application/json;charset=utf-8," + encodeURIComponent(settingsStr);
    // Set download
    element.download = "Homepage-Settings.json";
    // Click element
    element.click();
}

function importSettings() {
    // Create element
    const element = document.createElement("input");
    // Set type
    element.type = "file";
    // Set onchange
    element.onchange = function () {
        // Get file
        const file = this.files[0];
        // Create file reader
        const reader = new FileReader();
        // Set onload
        reader.onload = function () {
            // Get settings
            const settings = JSON.parse(this.result);
            // Set theme
            localStorage.setItem("theme", settings.theme);
            // Set time mode
            localStorage.setItem("timeMode", settings.timeMode);
            // Set time format
            localStorage.setItem("timeFormat", settings.timeFormat);
            // Set search engine
            localStorage.setItem("searchEngine", settings.searchEngine);
            // Set bookmarks
            localStorage.setItem("bookmarks", JSON.stringify(settings.bookmarks));
            // Set news
            localStorage.setItem("news", JSON.stringify(settings.news));
            // Reload
            location.reload();
        };
        // Read file
        reader.readAsText(file);
    };
    // Click element
    element.click();
}

function checkSwitch(id, switchId) {
    const elmt = document.getElementById(id);
    const status = document.getElementById(switchId).checked;
    elmt.setAttribute("data-status", status);
    if (status) elmt.classList.remove("hide");
    else elmt.classList.add("hide");
    return status;
}

function switchSearch() {
    let status = checkSwitch("search-form", "settings-search-switch");

    // Big time if search is disabled
    const time = document.getElementById("time");
    if (status) time.removeAttribute("style");
    else time.style.fontSize = "5rem";

    // If swithTime is also disabled, hide rule
    const switchTime = document.getElementById("settings-time-switch").checked;
    const rule = document.getElementById("rule-main");
    if (!status && !switchTime) rule.classList.add("hide");
    else rule.classList.remove("hide");

    // Save search status
    localStorage.setItem("searchStatus", status);
}

function switchTime() {
    let status = checkSwitch("time", "settings-time-switch");

    // If swithSearch is also disabled, hide rule
    const switchSearch = document.getElementById("settings-search-switch").checked;
    const rule = document.getElementById("rule-main");
    if (!status && !switchSearch) rule.classList.add("hide");
    else rule.classList.remove("hide");

    // Save time status
    localStorage.setItem("timeStatus", status);
}

function switchBookmarks() {
    let status = checkSwitch("bookmarks", "settings-bookmarks-switch");

    // Hide rule #rule-feed
    const rule = document.getElementById("rule-feed");
    if (status) rule.classList.remove("hide");
    else rule.classList.add("hide");

    // Save bookmarks status
    localStorage.setItem("bookmarksStatus", status);
}

function switchNews() {
    let status = checkSwitch("feed", "settings-news-switch");

    // Hide rule #rule-feed
    const rule = document.getElementById("rule-feed");
    if (status) rule.classList.remove("hide");
    else rule.classList.add("hide");

    // Save news status
    localStorage.setItem("newsStatus", status);
}