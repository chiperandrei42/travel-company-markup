const buttons = document.querySelectorAll('.dropdown-button');
const dropdownTexts = document.querySelectorAll('.dropdown-text');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        dropdownTexts[index].classList.toggle('show');
        button.classList.toggle('clicked');
    });
});
