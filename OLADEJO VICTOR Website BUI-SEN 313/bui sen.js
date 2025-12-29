function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} Victor Oladejo`;
