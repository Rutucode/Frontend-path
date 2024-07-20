import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
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

onValue(referanceInDB, (snapshot) => {
  const snapshotDoesExist = snapshot.exist();
  if (snapshotDoesExist) {
    // console.log(snapshot.val()) // to render leads it needs to turn object to an array
    const snapshotValues = snapshot.val(); // turn object to an array
    const renderValueLeads = Object.values(snapshotValues);
    // console.log(renderValueLeads)
    render(length);
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referanceInDB);
});

inputBtn.addEventListener("click", function () {
  //console.log(inputEl.value);
  //----------------How to push--------------------------
  push(referanceInDB, inputEl.value);
  inputEl.value = "";
});
