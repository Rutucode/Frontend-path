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
*/
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/*consentForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("form submitted")
}) */
consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  console.log(consentFormData);

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText"> 
            Uploading your data to the dark web...
        </p>
    </div>`; //use id to switch text bellow;

  setTimeout(() => {
    // const uploadText = document.getElementById("upload-text")
    //uploadText.innerHTML = `Making the sale...` OTHER METHOD
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);
});

setTimeout(() => {
  document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks you sucker! </h2>
       <p>We just sold the rights to your eternal soul.</p>
       <div class="idiot-gif">
           <img src="images/pirate.gif">
       </div>`;
}, 3000);
