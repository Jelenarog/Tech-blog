//** Post new comment**/

const newCommentBtn = document.querySelector("#commentBtn");
const postComment = document.querySelector("#postComment");
const cancelBtn = document.querySelector("#cancelComment");
const card = document.querySelector(".card");
document.querySelector("#editBlogBtn").style.display = "none";

//on click of leave comment button hide all comments and display comment input section
const openComment = async (e) => {
  e.preventDefault();
  document.querySelector("#leaveComment").style.display = "";
  document.querySelector("#postedComments").style.display = "none";
  document.querySelector("#commentBtn").style.display = "none";
};

//cancel comment input
const cancelComment = async (e) => {
  e.preventDefault();
  document.querySelector("#commentBtn").style.display = "";
  document.querySelector("#leaveComment").style.display = "none";
  document.querySelector("#postedComments").style.display = "";
};

//save new comment 
const submitCommentHandler = async (e) => {
  e.preventDefault();
  const userComment = document.querySelector("#userComment").value.trim();
  const blog_id = parseInt(e.target.getAttribute("blog-id")); 

  if (userComment && blog_id) {
    const response = await fetch(`/api/comment/save`, {
      method: "POST",
      body: JSON.stringify({ userComment, blog_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/api/comment/${blog_id}`); 
    }
  }
};




newCommentBtn.addEventListener("click", openComment);
cancelBtn.addEventListener("click", cancelComment);
postComment.addEventListener("click", submitCommentHandler);
