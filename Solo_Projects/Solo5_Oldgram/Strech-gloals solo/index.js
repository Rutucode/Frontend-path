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
const likeBtn2 = document.getElementById("like-icon-2");
const likeBtn3 = document.getElementById("like-icon-3");

const likeCount = document.getElementById("like-count");
const likeCount2 = document.getElementById("like-count-2");
const likeCount3 = document.getElementById("like-count-3");
let count = 21;
let count2 = 12;
let count3 = 98;

function likesCount() {
  count += 1;
  count2 += 1;
  count3 += 1;
  // likeBtn.innerHTML = count;
  likeCount.textContent = `${count} likes`;
  likeCount2.textContent = `${count2} likes`;
  likeCount3.textContent = `${count3} likes`;
}

likeBtn.addEventListener("click", function () {
  console.log("clicked");
  this.classList.toggle("clicked");
  likesCount();
});

likeBtn2.addEventListener("click", function () {
  console.log("clicked");
  this.classList.toggle("clicked");
  likesCount();
});

likeBtn3.addEventListener("click", function () {
  console.log("clicked");
  this.classList.toggle("clicked");
  likesCount();
});
