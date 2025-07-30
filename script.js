function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.password-toggle');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🔓';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '🔐';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;
    
    // Reset error states
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    
    // Validate username
    if (!username.value.trim()) {
        username.closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    // Validate password
    if (!password.value.trim()) {
        password.closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically send the data to your server
        alert('Login berhasil! (Ini hanya demo)');
        console.log('Username:', username.value);
        console.log('Password:', password.value);
        console.log('Remember me:', document.getElementById('remember').checked);
    }
});

// Remove error state when user starts typing
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        this.closest('.form-group').classList.remove('error');
    });
});