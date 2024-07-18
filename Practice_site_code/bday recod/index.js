import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push
 
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "birthdays");

const birthdayInputField = document.getElementById("birthday-input");
const submitButton = document.getElementById("submit-button");


submitButton.addEventListener("click", function () {
  //  console.log(birthdayInputField.value) Add this value to database
  push(referenceInDB, birthdayInputField.value);
  birthdayInputField.value = "";
});
