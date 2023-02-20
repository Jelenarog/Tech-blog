//**Get blog post**/

const selectBlog = document.querySelector('.blogList');

const viewComment = async (e) =>{
    e.preventDefault();
   console.log(e.target.id)
 if(e.target.id){
  const blog_id = parseInt(e.target.id);
  console.log(typeof blog_id);
  const response = await fetch(`/api/blog/${blog_id}`, {
            method: 'GET', 
            headers: { 'Content-Type': 'application/json'},
        });
         if (response.ok) {
          console.log('fetching worked');
          document.location.replace(`/api/blog/${blog_id}`);
           };
        };  
};
    


selectBlog.addEventListener('click', viewComment);