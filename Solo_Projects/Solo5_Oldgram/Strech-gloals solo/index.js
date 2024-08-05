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

const postContainer = document.getElementById("post-container");

posts.forEach((post) => {
  const postSection = document.createElement("section");
  postSection.classList.add("section");

  postSection.innerHTML = `
      <div class="post-info">
          <img src="${post.avatar}" alt="User-Profile-img" class="user-img" />
          <div class="user-info">
              <h3 class="follower-id">${post.name}</h3>
              <p class="follower-location">${post.location}</p>
          </div>
      </div>
      <img src="${post.post}" alt="post-img" class="post-img" id="like-post" />
      <div class="icon-container">
          <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2.32996" alt="like-icon" class="post-icon like-icon" id="like-icon">
              <path d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z" />
          </svg>
          <img src="images/icon-comment.png" alt="comment-icon" class="post-icon" />
          <img src="images/icon-dm.png" alt="DM-icon" class="post-icon" />
      </div>
      <div class="post-content">
          <h2 class="likes" id="like-count">${post.likes} likes</h2>
          <p class="user-name">${post.username}<span class="tag-line">${post.comment}</span></p>
      </div>
  `;

  postContainer.appendChild(postSection);
});

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

// ==============================================================

/*

function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  postElement.innerHTML = `
      <div class="post-header">
          <img class="avatar" src="${post.avatar}" alt="${post.name}">
          <div class="user-info">
              <h2>${post.name}</h2>
              <p>@${post.username}</p>
              <p>${post.location}</p>
          </div>
      </div>
      <img class="post-image" src="${post.post}" alt="Post image by ${post.name}">
      <div class="post-footer">
          <p>Likes: ${post.likes}</p>
          <p>${post.comment}</p>
      </div>
  `;

  return postElement;
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPosts(posts);
});
*/
