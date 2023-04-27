function nav() {
    const timeElement = document.getElementById("time");
    let pulse = true;
    updateTime = () => {
        // Get time
        let time = new Date();
        let hours = time.getHours().toString().padStart(2, "0");
        let minutes = time.getMinutes().toString().padStart(2, "0");
        // tick ":" if pulse is true
        let tick = pulse ? ":" : " ";
        // Set time
        timeElement.innerText = hours + tick + minutes;
        // Invert pulse
        pulse = !pulse;
    }
    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);
}