//** Post new comment**/

const btn = document.querySelector("#commentBtn");
const postComment = document.querySelector("#postComment");
const card = document.querySelector(".card");

const openComment = async (e) => {
  e.preventDefault();
  document.querySelector("#leaveComment").style.display = "";
  document.querySelector("#postedComments").style.display = "none";

};

const submitCommentHandler = async (e) => {
  e.preventDefault();
  const userComment = document.querySelector("#userComment").value.trim();
  const blog_id = parseInt(e.target.getAttribute("blog-id")); 

  if (userComment && blog_id) {
    //console.log(e.target.getAttribute("blog-id"));
    
    const response = await fetch(`/api/comment/saveComment`, {
      method: "POST",
      body: JSON.stringify({ userComment, blog_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/api/comment/${blog_id}`); 
    }
  }
};

btn.addEventListener("click", openComment);
postComment.addEventListener("click", submitCommentHandler);
