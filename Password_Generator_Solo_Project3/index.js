const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomPassword1 = document.getElementById("password1");
let randomPassword2 = document.getElementById("password2");
let generatePassword = document.getElementById("generate");

function getrandomChar() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generatedPassword() {
  let passwordlength = 15;
  let pass1 = "";
  let pass2 = "";
  for (i = 0; i < passwordlength; i++) {
    pass1 += getrandomChar();
    pass2 += getrandomChar();
  }
  randomPassword1.textContent = pass1;
  randomPassword2.textContent = pass2;
}
//-------------------Copy password----------------------------
let copyClick1 = document.getElementById("copyPassword1");
let copyClick2 = document.getElementById("copyPassword2");

copyClick1.addEventListener("click", () => {
  let passwordtext1 = randomPassword1.textContent;
  navigator.clipboard.writeText(`${passwordtext1}`);

  alert(`Password 1 is copied to clipboard!`);
});

copyClick2.addEventListener("click", () => {
  let passwordtext2 = randomPassword2.textContent;
  navigator.clipboard.writeText(`${passwordtext2}`);

  alert(`Password 2 is copied to clipboard!`);
});
