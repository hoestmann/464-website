var darkModeEnabled = false;
var pdf = document.createElement('iframe');
pdf.id = "resumepdf";

function toggleDarkMode() {
    console.log("Toggle Dark Mode");
    var body = document.body;
    body.classList.toggle("dark-theme");
    if (darkModeEnabled) {
        darkModeEnabled = false
        pdf.src = "../Images/Fall2022Resume.pdf#toolbar=0";
    } else {
        darkModeEnabled = true
        pdf.src = "../Images/DarkFall2022Resume.pdf#toolbar=0";
    }
}

function insertPDF() {
    console.log("Insert PDF");
    if (darkModeEnabled) {
        pdf.src = "../Images/DarkFall2022Resume.pdf#toolbar=0";
    } else {
        pdf.src = "../Images/Fall2022Resume.pdf#toolbar=0";
    }
    document.getElementById("resume").appendChild(pdf);
    // return '<iframe id="resumepdf" src="../Images/Fall2022Resume.pdf#toolbar=0" frameborder="0" toolbar="0"></iframe>';
}

window.onload = function() {
    var body = document.body;
    body.classList.add("light-theme");
};