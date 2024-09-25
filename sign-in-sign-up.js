document.getElementById('switchToSignUp').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'block';
});

document.getElementById('switchToSignIn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.sign-in-container').style.display = 'block';
    document.querySelector('.sign-up-container').style.display = 'none';
});

// You can add form validation here if needed
document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    // Add your sign-in logic here
    alert('Sign In Successful');
});

document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    // Add your sign-up logic here
    alert('Sign Up Successful');
});
