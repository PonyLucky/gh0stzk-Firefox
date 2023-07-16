function nav() {
    const timeElement = document.getElementById("time");
    const timeMode = timeElement.dataset.mode;
    const timeFormat = timeElement.dataset.format;

    // Update time
    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);
}

function updateTime () {
    const timeElement = document.getElementById("time");
    const timeMode = timeElement.dataset.mode;
    const timeFormat = timeElement.dataset.format;
    const timeStatus = timeElement.dataset.status;

    // If time is disabled
    if (timeStatus == "false") return;

    // Get time 12 hour format
    let time = new Date();
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let overload = "";
    let tick = ":";

    // If time mode 12 hour
    if (timeFormat == "12h") {
        // Convert to 12 hour format
        hours = (hours % 12) || 12;
        // Set overload
        overload = time.getHours() >= 12 ? "pm" : "am";
    }

    // If time mode with pulse
    if (timeMode == "pulse") {
        // Init pulse if undefined
        if (timeElement.dataset.pulse === undefined) {
            timeElement.dataset.pulse = true;
        }
        // tick ":" if pulse is true
        tick = timeElement.dataset.pulse === "true" ? ":" : " ";
        // Invert pulse
        timeElement.dataset.pulse = timeElement.dataset.pulse === "true" ? false : true;
    }

    // Set time
    timeElement.innerText = hours + tick + minutes + overload;
}