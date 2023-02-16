const selectBlog = document.querySelector('.blogList');

const viewComment = async (e) =>{
  console.log(e.target.id)
    e.preventDefault();
    
 if(e.target.id){
  const blog_id = parseInt(e.target.id);
  console.log(typeof blog_id);
  const response = await fetch(`/api/blog/${blog_id}`, {
            method: 'GET', 
            //body: JSON.stringify ({selection}),
            headers: { 'Content-Type': 'application/json'},
        });
         if (response.ok) {
          console.log('fetching worked');
          document.location.replace(`/api/blog/${blog_id}`);
           };
        };



    
};
    
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


selectBlog.addEventListener('click', viewComment);