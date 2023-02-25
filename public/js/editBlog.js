const editBlogBtn = document.querySelector("#editBlogBtn");
const postEditBtn = document.querySelector("#postEdit");
const cancelEditBtn = document.querySelector("#cancelEdit");
const deleteBlogBtn = document.querySelector("#delete");
const blogId = document.querySelector('.editBlog').getAttribute("blog-id");

//cancel edit blog button
const cancelChangeHandler = async (e) =>{
  document.location.replace(`/api/dashboard/`); 
}

//cancel edit blog button
const deleteBlogHandler = async (e) =>{
  e.preventDefault();
  const response = await fetch(`/api/blog/delete/${blogId}`, {
    method: 'POST',
    //body: JSON.stringify ({ exerciseId }),
    headers: { 'Content-Type': 'application/json'},
});

if(response.ok) {
  document.location.replace(`/api/dashboard/`);
}
}

//edit existing blog
const updateBlogHandler = async (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();

  if (title || text) {
    const response = await fetch(`/api/blog/edit/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },


    });
    console.log(response)
   if (response.ok) {
    document.location.replace(`/api/dashboard/`); 
  }
  }
 

};



postEditBtn.addEventListener("click", updateBlogHandler);
cancelEditBtn.addEventListener("click", cancelChangeHandler);
deleteBlogBtn.addEventListener("click", deleteBlogHandler);