//********** Handling new blog post, and edit existing blog****************//

const newBlogBtn = document.querySelector("#newBlogBtn");
const postBlog= document.querySelector("#postBlog");
const cancelBlogBtn = document.querySelector("#cancelBlog");
//const editBlogBtn = document.querySelector("#editBlogBtn");
const editBlog = document.querySelector(".singleBlog");
//const editBlogBtn = document.querySelector("#editBlogBtn");


//on click of leave comment button hide all comments and display comment input section
const startBlog = async (e) => {
  e.preventDefault();
  document.querySelector(".singleBlog").style.display = "none";
  document.querySelector("#newBlog").style.display = "";


};

//cancel blog edit or post
const cancelBlog = async (e) => {
  e.preventDefault();
  document.querySelector("#editBlogBtn").style.display = "";
  document.querySelector(".singleBlog").style.display = "";
  document.querySelector("#newBlog").style.display = "none";
};

//save new blog 
const submitBlogHandler = async (e) => {
  e.preventDefault();
  const blogTitle = document.querySelector("#blogTitle").value.trim();
  const blogText = document.querySelector("#blogText").value.trim();

  if (blogTitle && blogText) {
    const response = await fetch(`/api/blog/save`, {
      method: "POST",
      body: JSON.stringify({ blogTitle, blogText }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/api/dashboard/`); 
    }
  }
};


//open blog edit
const openEditBlog = async (e) => {
  e.preventDefault();
  const blog_id = e.target.getAttribute("blog-id");
 if( blog_id){
  const response = await fetch(`/api/dashboard/edit/${blog_id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/api/dashboard/edit/${blog_id}`);
  }
};
}








newBlogBtn.addEventListener("click", startBlog);
cancelBlogBtn.addEventListener("click", cancelBlog);
postBlog.addEventListener("click", submitBlogHandler);
editBlog.addEventListener("click", openEditBlog);