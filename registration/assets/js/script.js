const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
const signUpForm = document.querySelector('.sign-up-container form');

overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
    });
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const nameInput = signUpForm.querySelector('input[type="text"]').value;
    const emailInput = signUpForm.querySelector('input[type="email"]').value;
    const passwordInput = signUpForm.querySelector('input[type="password"]').value;

    const popupMessage = `Name: ${nameInput}\nEmail: ${emailInput}\nPassword: ${passwordInput}`;
    alert(popupMessage);
});

