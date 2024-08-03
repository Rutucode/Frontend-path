const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const likePost = document.getElementById("like-post");
const likeBtn = document.getElementById("like-icon");
const likeCount = document.getElementById("like-count");
let count = 21;

function likesCount() {
  count += 1;
  likeBtn.innerHTML = count;
  likeCount.innerHTML = ` <h2 class="likes" id="like-count">${count} likes</h2>`;
}
/*
likeBtn.addEventListener("click", (like) => {
  this.classList.toggle("clicked");
});
*/

likeBtn.addEventListener("click", function () {
  console.log("clicked");
  this.classList.toggle("clicked");
});
