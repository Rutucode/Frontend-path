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
*/
import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

emotionRadios.addEventListener("chnage", (e) => {
  console.log(e.target.id);
});

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
  const emotions = getEmotionsArray(cats);
  //  console.log(emotions);
  let radioItems = ``;
  for (let emotion of emotions) {
    radioItems += `<p>${emotion}</p>`;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
