const content = document.querySelector(".content");
const popup = document.querySelector(".popup");
const profileEdit = content.querySelector(".profile__edit-button");
const popupButtonClose = document.querySelector(".popup__close");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_username");
const jobInput = document.querySelector("popup__input_job");
// ВАЖНО! Я не понимаю почему код не работает, если поможете, буду благодарен )
function openProfileButton() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopupButton () {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupButton();
}

popupForm.addEventListener("submit", handleFormSubmit);
profileButton.addEventListener("click", openProfileButton);
popupButtonClose.addEventListener("click", closePopupButton);
