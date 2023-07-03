const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const content = document.querySelector(".content");
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup-add");
const profileButton = content.querySelector(".profile__edit-button");
const profileAddButton = content.querySelector(".profile__add-button");
const popupButtonClose = document.querySelector(".popup__close");
const closeAddButton = document.querySelector(".popup-add__close");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_job");

function openProfileButton() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openPopupAdd() {
  popupAdd.classList.add('popup-add_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup-add_opened');
}

function closePopupButton() {
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
profileAddButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);