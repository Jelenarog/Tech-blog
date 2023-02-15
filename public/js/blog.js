const selectBlog = document.querySelector('.blogList');

const viewComment = async (e) =>{
    e.preventDefault();
if(e.target.id){
    console.log(e.target.id)
}
    
  //const selection = e.target.id;

//  if(selection){
//     const response = await fetch ('/dashboard', {
//         method: 'GET', 
//        // body: JSON.stringify ({ selection}),
//         headers: { 'Content-Type': 'application/json'},
//     });

//      //If user gets logged in show success and redirect to homepage
//     //  if (response.ok) {
//     //     console.log('comment fetching works')
//     //     document.location.replace('/'); 
//     //    };
//     };
};

selectBlog.addEventListener('click', viewComment);