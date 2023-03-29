var darkModeEnabled = false;

function toggleDarkMode() {
    console.log("Toggle Dark Mode");
    var body = document.body;
    body.classList.toggle("dark-theme");
    if (darkModeEnabled) {
        darkModeEnabled = false
    } else {
        darkModeEnabled = true
    }
}

window.onload = function() {
    var body = document.body;
    //body.classList.add("light-theme");
};