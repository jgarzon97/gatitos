const form = document.querySelector('form');
form.addEventListener('input', (e) => {
    const input = e.target;
    if (input.validity.valid) {
        input.classList.remove('border-red-500');
        input.classList.add('border-green-500');
    } else {
        input.classList.remove('border-green-500');
        input.classList.add('border-red-500');
    }
});
