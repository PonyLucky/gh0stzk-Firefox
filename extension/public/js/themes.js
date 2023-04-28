function changeTheme() {
    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Get the index of the next theme
    let index = Object.keys(THEMES).indexOf(currentTheme) + 1;
    // If the index is greater than the number of themes, reset it to 0
    if (index >= Object.keys(THEMES).length) {
        index = 0;
    }
    const newTheme = Object.keys(THEMES)[index];
    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    // Apply the new theme
    applyTheme();
    // Save the new theme
    localStorage.setItem('theme', newTheme);
}

function applyTheme() {
    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Get the theme object
    const theme = THEMES[currentTheme];
    // Get root element
    const root = document.querySelector(':root');
    // Apply the theme
    for (const key in theme) {
        root.style.setProperty(key, theme[key]);
    }
}