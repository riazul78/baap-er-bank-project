document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-here');
    const email = emailField.value;

    const passField = document.getElementById('pass-here');
    const pass = passField.value;

    if(email === 'riazulrakib@gmail.com' && pass === 'rakib21/7'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid password')
    }

    
})