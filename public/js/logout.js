const logOutBtn = document.querySelector('#logoutBtn');

const logoutBtn = async (e) =>{
    e.preventDefault();
    
    const response = await fetch ('api/users/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
    });

     //If user gets logged in show success and redirect to homepage
     if (response.ok) {
        console.log('BTN clicked')
        document.location.replace('/api/dashboard/'); 
       };

};

logOutBtn.addEventListener('click', logoutBtn);