document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('complain-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        successMessage.style.display = 'block'; // Show the success message
        form.reset(); // Clear the form fields
    });
});

