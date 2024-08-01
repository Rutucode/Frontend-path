/* Logic
    -Display card in a 1/2 sec
    -Click close button to close display form
    -Disable form infomation in tab content
    -button 2 behavior , scecond button acts as submit as well if its not type= "reset" so add type = "button"
    -Text change when accept button is clicked
    -Use a setTimeout to make the phrase "Uploading
   your data to the dark web" change to "Making the 
   sale..." after 1.5 seconds.
⚠️ Do not change the loading svg!
    -user-input data to FormData()
    -To GET USER DATA IN OBJECT FORM -create a const and set it equals to a new instance of FormData which takes in our HTML form element as a parameter.
    Extract data from object
    -1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
  2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
   1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
3. For now, just log out "hovered" when that 
   happens. 
   1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/*    
declineBtn.addEventListener('mouseover', () => {
  // Code to execute when the cursor hovers over the button
  console.log('hovered');
});
*/

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-btns-reverse");
  //console.log('hovered')
});

/*consentForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("form submitted")
}) */

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  //console.log(consentFormData);
  const name = consentFormData.get("fullName");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text"> 
            Uploading your data to the dark web...
        </p>
    </div>`; //use id to switch text bellow;

  setTimeout(() => {
    // const uploadText = document.getElementById("upload-text")
    //uploadText.innerHTML = `Making the sale...` OTHER METHOD
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(() => {
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
       <p>We just sold the rights to your eternal soul.</p>
       <div class="idiot-gif">
           <img src="images/pirate.gif">
       </div>`;

    closeBtn.disabled = false;
  }, 3000);
});
