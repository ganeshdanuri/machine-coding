const addCommentBtn = document.getElementById("addCommentBtn");
const commentsContainer = document.getElementById("comments-container");
const commentInputEle = document.getElementById("commentInput");

const comments = [];

const handleButtonClick = () => {
  const value = commentInputEle.value;
  if (!value) return;

  const div = document.createElement("div");
  const p = document.createElement("p");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");

  comments.push(value);

  const id = Date.now();

  div.id = id;
  button2.id = "button2" + id;
  button1.id = "button1" + id;
  p.textContent = value;
  button1.textContent = "delete";
  button2.textContent = "reply";

  div.appendChild(p);
  div.appendChild(button2);
  div.appendChild(button1);
  div.classList.add("flex");

  commentsContainer.appendChild(div);
  commentInputEle.value = ""; // Reset value
};
const handleClick = (e) => {
  //   prompt("Enter your reply:")
  //   const targetId = e.target.id.slice(6);
  //   document.getElementById(targetId).remove();
};

addCommentBtn.addEventListener("click", handleButtonClick);
commentsContainer.addEventListener("click", handleClick);
