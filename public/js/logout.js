const logOutBtn = document.querySelector('#logoutBtn');

const logoutBtn = async (e) =>{
    e.preventDefault();
    console.log('BTN clicked')
    const response = await fetch ('api/users/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
    });

     //If user gets logged in show success and redirect to homepage
     if (response.ok) {
        console.log('User is now logged out')
        document.location.replace('/'); 
       };

};

logOutBtn.addEventListener('click', logoutBtn);