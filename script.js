// Select hamburger button and navbar list
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarList = document.getElementById('navbarList');

// Toggle navbar visibility on hamburger click
hamburgerMenu.addEventListener('click', () => {
    if (navbarList.style.display === 'flex') {
        navbarList.style.display = 'none';
    } else {
        navbarList.style.display = 'flex';
    }
});
