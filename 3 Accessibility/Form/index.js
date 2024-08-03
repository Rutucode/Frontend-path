/*
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const popoverMessage = document.getElementById('popoverMessage');

    //mouseover not visible for touch screens, laptops without mouse
    submitButton.addEventListener('mouseover', function() {
        if (submitButton.disabled) {
            popoverMessage.style.display = 'block';
        }
    });

    submitButton.addEventListener('mouseout', function() {
        popoverMessage.style.display = 'none';
    });
});
*/

function checkInputs() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postcode = document.getElementById("postcode").value;
  const email = document.getElementById("email").value;
  const yesRadio = document.getElementById("yes").checked;
  const noRadio = document.getElementById("no").checked;

  // Checks if all fields are filled (truthy) and at least one radio button is selected

  const allFilled =
    name && address && city && postcode && email && (yesRadio || noRadio);
  /*
  if (allFilled) {
    popoverMessage.style.display = "block";
  }*/
  if (allFilled) {
    popoverMessage.style.opacity = "0";
  }

  document.getElementById("submitButton").disabled = !allFilled;
  return allFilled;
}

// Event listeners for each input field
document.getElementById("name").addEventListener("input", checkInputs);
document.getElementById("address").addEventListener("input", checkInputs);
document.getElementById("city").addEventListener("change", checkInputs);
document.getElementById("postcode").addEventListener("input", checkInputs);
document.getElementById("email").addEventListener("input", checkInputs);
document.getElementById("yes").addEventListener("change", checkInputs);
document.getElementById("no").addEventListener("change", checkInputs);

// click events are generally accessible to mouse, keyboard, and touchscreen users. Similarly, focus and blur can effectively replace mouseover and mouseout

// For touchscreen users, events like touchstart can be used
