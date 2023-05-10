const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const Xbutton = document.querySelector(".Xbutton");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function greetingHandleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  input.value = null;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  Xbutton.classList.add("Xnone");
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", greetingHandleSubmit);
}

function paintGreeting(text) {
  Xbutton.classList.remove("Xnone");
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hi ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function xClick() {
  localStorage.removeItem(USER_LS);
  greeting.classList.remove(SHOWING_CN);
  askForName();
}

function init() {
  loadName();
  Xbutton.addEventListener("click", xClick);
}
init();