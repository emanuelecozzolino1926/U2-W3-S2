const userName = document.getElementById("user");
const saveButton = document.getElementById("save");
const resetButton = document.getElementById("reset");

const key = "username";

const displayUser = document.createElement("h2");
displayUser.classList.add("my-3");
document.querySelector(".container-fluid").append(displayUser);

const savedUser = localStorage.getItem(key);
if (savedUser) {
  displayUser.innerText = "Utente salvato: " + savedUser;
} else {
  displayUser.innerText = "Nessun utente salvato";
}

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userNameValue = userName.value.trim();
  if (userNameValue === "") return;
  localStorage.setItem(key, userNameValue);
  displayUser.innerText = "Utente salvato: " + userNameValue;
});

resetButton.addEventListener("click", () => {
  userName.value = "";
  localStorage.removeItem(key);
  displayUser.innerText = "Nessun utente salvato";
});

const counterDisplay = document.createElement("h3");
document.querySelector(".container-fluid").append(counterDisplay);
let counter = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0;
counterDisplay.innerText = "Secondi trascorsi: " + counter;

setInterval(() => {
  counter++;
  sessionStorage.setItem("counter", counter);
  counterDisplay.innerText = "Secondi trascorsi: " + counter;
}, 1000);
