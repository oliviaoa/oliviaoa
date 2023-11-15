function toggleTheme() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}
var buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;
