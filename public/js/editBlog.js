const editBlogBtn = document.querySelector("#editBlogBtn");
const postEditBtn = document.querySelector("#postEdit");
const cancelEditBtn = document.querySelector("#cancelEdit");
const deleteBlogBtn = document.querySelector("#delete");

//edit blog

const updateBlogHandler = async (e) => {
  e.preventDefault();
  // console.log(e.target.id)
  console.log("button works");
  //  if(e.target.id){
  //   const blog_id = parseInt(e.target.id);

  //   const response = await fetch(`/api/blog/${blog_id}`, {
  //             method: 'PUT',
  //             headers: { 'Content-Type': 'application/json'},
  //         });
  //          if (response.ok) {
  //           console.log('fetching worked');
  //           document.location.replace(`/api/blog/${blog_id}`);
  //            };
  // };
};

//open blog edit
// const openEditBlog = async (e) => {
//   console.log(e.target.getAttribute("blog-id"));
//   e.preventDefault();
//   console.log("open edit");
//   const blog_id = e.target.getAttribute("blog-id");
//   const response = await fetch(`/api/dashboard/edit/${blog_id}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     document.location.replace(`/api/dashboard/edit/${blog_id}`);
//   }
// };

// editBlogBtn.addEventListener("click", openEditBlog);
postEditBtn.addEventListener("click", updateBlogHandler);
