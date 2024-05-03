const stars = document.querySelectorAll(".star");
const main = document.getElementById("main-container");

console.log(stars);

const handleStarRating = (e) => {
  const targetIndex = parseInt(e.target.dataset.index);
  stars.forEach((starElement, index) => {
    starElement.classList.toggle("color", index < targetIndex);
  });
};

const hanldeMessage = (e) => {
  const rating = e.target.dataset.index;
  const messageEle = document.getElementById("message");

  if (messageEle) {
    messageEle.textContent = `you rated ${rating}/5`;
  } else {
    const ele = document.createElement("span");
    ele.id = "message";
    ele.textContent = `you rated ${rating}/5`;
    main.appendChild(ele);
  }
};

for (const star of stars) {
  star.addEventListener("click", (e) => {
    handleStarRating(e);
    hanldeMessage(e);
  });
}
