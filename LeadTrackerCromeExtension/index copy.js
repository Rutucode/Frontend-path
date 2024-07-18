import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-a2f41-default-rtdb.asia-southeast1.firebasedatabase.app/leads",
  //process.env.MY_DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referanceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {});

inputBtn.addEventListener("click", function () {
  //console.log(inputEl.value);
  //----------------How to push--------------------------
  push(referanceInDB, inputEl.value);
  inputEl.value = "";
});
