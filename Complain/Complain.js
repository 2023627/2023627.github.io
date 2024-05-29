//java script is used to creat a button when pused by user it comes with success meassage
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('complain-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stops the form from submitting in the traditional way
        successMessage.style.display = 'block'; //  The success message
        form.reset(); 
    });
});

