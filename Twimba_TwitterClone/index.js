import { tweetsData } from "./data.js";

const tweetInput = document.getElementById("tweet-input-area");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", function () {
  //   console.log("clicked");

  const inputValue = tweetInput.value;
  console.log(inputValue);
});

function getFeedHtml() {
  let feedHtml = ``;

  /*
for (let tweet of tweetsData) {
}
 used forEach instead of for of loop
*/
  tweetsData.forEach(function (tweet) {
    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`;
  });

  return feedHtml;
}

console.log(getFeedHtml());
console.log(tweetsData);

function render() {
  /*
  const renderFeed = document.getElementById("feed");
  renderFeed.innerHTML = getFeedHtml();
  */
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
