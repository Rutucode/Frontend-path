/*
    -For of loop
    -Empty array for emotions, push()
    -return array
    

1. Have the new function "renderEmotionsRadios" 
   take in a single parameter. Name that parameter
   "cats". 
2. Inside renderEmotionsRadios, set up a const called 
   "emotions" and set it equals to whatever is returned 
   by calling getEmotionsArray, passing in "cats" as an 
   argument.
3. For now, renderEmotionsRadios should just log out 
   "emotions".
4. Call renderEmotionsRadios passing in catsData.
1. Take control of the 'emotion-radios' div.
2. In renderEmotionsRadios, set up a let 
   to hold our string of HTML. You can initialise
   it with an empty string.
3. Iterate over "emotions" and put each emotion 
   in a <p> tag and then add them to the let you 
   created in step 2. 
4. Render the string to the 'emotion-radios' div.
Challenge:
1. Add an eventListener to emotionRadios that will listen 
   out for any *change* in our radio buttons. When it detects
   a change, it should log out the id of the element that 
   was selected.
⚠️️ ️T️h️is won't work if the eventListener is listening out for a 
   'click'. Google what event to listen for - I've already 
   given you a clue!
   Challenge:
1. highlightCheckedOption should take control 
 of the selected radio input and add the CSS
 class of "highlight" to its classlist.
 1. Change the code in line 8 so we add the 
   'highlight' class to the parent of the 
   selected input radio.
   1. Create an array of all items that have 
   the "radio" class.
2. Iterate over the array and remove the 
   "highlight" class from each one.
   Challenge:
1. Set up an eventlistener which calls a new
   function called "getMatchingCatsArray" when
   the "Get Image" button is clicked.
2. getMatchingCatsArray should save the value
   of the checked radio input to a const and 
   log out that const.
   Challenge:
1. Add code to getMatchingCatsArray so 
   that the two existing lines of code 
   only run if an emotion has been selected.
   1. Take control of the gifs only option checkbox.
2. Set up a const in getMatchingCatsArray to store 
   a boolean which will be set to true if the 
   "gifs only" option is checked and false if it's
   not. (Think what a good name for this const would 
   be.)
3. Log it out to check it's working.
1. Take control of the gifs only option checkbox.
2. Set up a const in getMatchingCatsArray to store 
   a boolean which will be set to true if the 
   "gifs only" option is checked and false if it's
   not. (Think what a good name for this const would 
   be.)
3. Log it out to check it's working.
Challenge:
1. Use the .filter() and .includes() methods to get 
   an array of cats which have the selected emotion
   in their emotionTags array. 
2. Store this array in a const and log it out to check
   it's working. Think: what would be a good name for the
   const?
   Challenge:
1. Change the .filter() method's function so it returns an 
   array that only has GIFs if the 'GIFs only' option is 
   checked. If the 'GIFs only' option is not checked, it
   should return an array of all matches as it does now.
*/

import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

emotionRadios.addEventListener("change", highlightCheckedOption);
getImageBtn.addEventListener("click", getMatchingCatsArray);
//getEmotionsArray.addEventListener("click", getMatchingCatsArray);

function highlightCheckedOption(e) {
  //   document.getElementById(e.target.id).style.accentColor = 'red'
  const radioClassArray = document.getElementsByClassName("radio");
  for (let radio of radioClassArray) {
    radio.classList.remove("highlight");
  }
  // remove all instances of the highlight class
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
  //console.log(e.target.id)
}

function getMatchingCatsArray() {
  //  console.log("isGifChecked");
  if (document.querySelector("input[type='radio']:checked")) {
    const radioChecked = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    //  console.log(radioChecked);
    const isGifChecked = gifsOnlyOption.checked;
    const getMatchingEmotion = catsData.filter(function (catEmotion) {
      if (isGifChecked) {
        return (
          catEmotion.emotionTags.includes(radioChecked) &&
          catEmotion.isGifChecked === true
        );
      } else {
        return catEmotion.emotionTags.includes(radioChecked);
      }
    });
    return getMatchingEmotion;
  }
}

function getSingleCatObject() {}

function renderCat() {}

function getEmotionsArray(cats) {
  const emotionArry = [];
  for (let cat of catsData) {
    for (let emotion of cat.emotionTags) {
      if (!emotionArry.includes(emotion)) {
        emotionArry.push(emotion);
      }
    }
  }
  return emotionArry;
}

//getEmotionsArray(catData)

function renderEmotionsRadios(cats) {
  let radioItems = ``;
  const emotions = getEmotionsArray(cats);
  //  console.log(emotions);
  for (let emotion of emotions) {
    radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
