document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.links');
    navLinks.classList.toggle('active');
});