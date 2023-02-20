//********** Handling new blog post, and edit existing blog****************//

const newBlogBtn = document.querySelector("#newBlogBtn");
const postBlog= document.querySelector("#postBlog");
const cancelBlogBtn = document.querySelector("#cancelBlog");
const editBlogBtn = document.querySelector("#editBlogBtn");
const editBlog = document.querySelector(".singleBlog");

//on click of leave comment button hide all comments and display comment input section
const startBlog = async (e) => {
  e.preventDefault();
  document.querySelector(".singleBlog").style.display = "none";
  document.querySelector("#newBlog").style.display = "";
  console.log('button works');

};

//cancel blog input
const cancelBlog = async (e) => {
  e.preventDefault();

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

//edit blog 

const editBlogHandler = async (e) => {
  e.preventDefault();
  console.log(e.target.id)
 console.log(e.target.getAttribute("blog-id"));
  const blogTitle = document.querySelector("#blogTitle").value.trim();
  const blogText = document.querySelector("#blogText").value.trim();



  // if (blogTitle && blogText) {
  //   const response = await fetch(`/api/blog/save/${blog_id}`, {
  //     method: "POST",
  //     body: JSON.stringify({ blogTitle, blogText }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (response.ok) {
  //     document.location.replace(`/api/dashboard/`); 
  //   }
  // }
};



//delete blog 






newBlogBtn.addEventListener("click", startBlog);
cancelBlogBtn.addEventListener("click", cancelBlog);
postBlog.addEventListener("click", submitBlogHandler);
editBlog.addEventListener("click", editBlogHandler);