const btn = document.querySelector('#loginBtn');

const submitFormHandler = async (e) =>{
    e.preventDefault();

const username = document.querySelector('#inputUsername').value.trim();
const email = document.querySelector('#inputEmail').value.trim();
const password = document.querySelector('#inputPassword').value.trim();
 if(username && email && password){
    const response = await fetch ('api/users/register', {
        method: 'POST', 
        body: JSON.stringify ({ username, email, password }),
        headers: { 'Content-Type': 'application/json'},
    });

     //If user gets logged in show success and redirect to homepage
     if (response.ok) {
        console.log('Your new account has been successfully created.')
        document.location.replace('/');
       };
    };
};

btn.addEventListener('click', submitFormHandler);