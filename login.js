document.addEventListener('DOMContentLoaded', function() {
    const formTitle = document.getElementById('formTitle');
    const formDescription = document.getElementById('formDescription');
    const nameField = document.getElementById('nameField');
    const submitButton = document.getElementById('submitButton');
    const toggleText = document.getElementById('toggleText');
    const toggleLink = document.getElementById('toggleLink');
    const authForm = document.getElementById('authForm');

    let isLogin = true;

    function toggleForm() {
        isLogin = !isLogin;
        if (isLogin) {
            formTitle.textContent = 'Welcome Back!';
            formDescription.textContent = 'Enter your details to access your fitness dashboard';
            nameField.classList.add('hidden');
            submitButton.textContent = 'Sign In';
            toggleText.textContent = "Don't have an account? ";
            toggleLink.textContent = 'Sign up';
        } else {
            formTitle.textContent = 'Create Account';
            formDescription.textContent = 'Sign up to start tracking your fitness journey';
            nameField.classList.remove('hidden');
            submitButton.textContent = 'Create Account';
            toggleText.textContent = 'Already have an account? ';
            toggleLink.textContent = 'Sign in';
        }
    }

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        toggleForm();
    });

    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log(isLogin ? 'Logging in...' : 'Signing up...');
        // For demonstration, we'll just log the form data
        const formData = new FormData(authForm);
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }
    });
});