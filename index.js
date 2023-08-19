
let darkmodeToggle = document.querySelector('.dark-mode-toggle'); 
let themeSelect = document.getElementById('theme');

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
}


function selectTheme() {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("neon");
    document.body.classList.remove("theme-1");
    document.body.classList.remove("theme-2");

    if (themeSelect.value == '') return;
    document.body.classList.add(themeSelect.value)
}