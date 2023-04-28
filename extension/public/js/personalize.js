function personalize() {
    // Get personalize
    const personalize = document.getElementById("personalize");
    // Get settings
    const settings = document.getElementById("settings");
    // Switch hide
    switchHide(personalize);
    switchHide(settings);
}

function switchHide(element) {
    // Has class "hide"
    if (element.classList.contains("hide")) {
        // Remove class "hide"
        element.classList.remove("hide");
    } else {
        // Add class "hide"
        element.classList.add("hide");
    }
}