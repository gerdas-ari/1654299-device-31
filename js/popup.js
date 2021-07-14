const popupButton = document.querySelector(".popup-button");
const messagePopup = document.querySelector(".modal-message");
const messageClose = messagePopup.querySelector(".close-button");
const messageForm = messagePopup.querySelector(".message-form");
const messageName = messagePopup.querySelector(".form-name");
const messageEmail = messagePopup.querySelector(".form-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");

  if (storage) {
    messageName.value = storage;
    messageEmail.focus();
  } else {
    messageName.focus();
  }

  messageName.focus();
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
  messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function (evt) {
  if (!messageName.value || !messageEmail.value) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-error");
    messagePopup.offsetWidth = messagePopup.offsetWidth;
    messagePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", messageName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
      messagePopup.classList.remove("modal-error");
    }
  }
});
