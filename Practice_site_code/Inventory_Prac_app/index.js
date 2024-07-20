import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "products")

const productNameInputField = document.getElementById("product-name-input")
const productValueInputField = document.getElementById("product-value-input")
const submitButton = document.getElementById("submit-button")

onValue(referenceInDB, (snapshot)=>{ // what part of data base by referenceInDB
    console.log(snapshot) // submit button attach eventlistner , cliks runs this code, listen to firebase
  })
  

submitButton.addEventListener("click", function() {
    productNameInputField.value
    push(referenceInDB, productNameInputField.value)
    productNameInputField.value = ""
})