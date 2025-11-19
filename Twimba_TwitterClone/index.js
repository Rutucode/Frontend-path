import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input-area");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  //   console.log("clicked");

  const inputValue = tweetInput.value;
  console.log(inputValue);
});

console.log(tweetsData);
