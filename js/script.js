function viewPassword ()
{
    var passwordInput = document.getElementById('password-field');
    var passStatus = document.getElementById('pass-status');

    if (passwordInput.type == 'password') {
        passwordInput.type='text';
        passStatus.className='eye-on';
    }

    else{
        passwordInput.type='password';
        passStatus.className='eye-off';
    }

}