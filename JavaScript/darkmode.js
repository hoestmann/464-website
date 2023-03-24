function toggleDarkMode() {
    console.log("Toggle Dark Mode");
    var body = document.body;
    body.classList.toggle("dark-theme");
}

window.onload = function() {
    var body = document.body;
    body.classList.add("light-theme");
};