const btn = document.querySelector('#loginBtn');

const submitFormHandler = async (e) =>{
    e.preventDefault();

const username = document.querySelector('#inputUsername').value.trim();
const password = document.querySelector('#inputPassword').value.trim();
 if(username && password){
    const response = await fetch ('api/users/login', {
        method: 'POST', 
        body: JSON.stringify ({ username, password }),
        headers: { 'Content-Type': 'application/json'},
    });

     //If user gets logged in show success and redirect to homepage
     if (response.ok) {
        console.log('logged in')
        document.location.replace('/'); 
       };
    };
};

btn.addEventListener('click', submitFormHandler);