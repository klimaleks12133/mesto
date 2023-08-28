const content = document.querySelector(".content");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupImage = document.querySelector('.popup_image');
const profileEditButton = content.querySelector(".profile__edit-button");
const profileAddButton = content.querySelector(".profile__add-button");
const buttonCloseImage = popupImage.querySelector(".popup__close");
const buttonCloseEdit = popupEdit.querySelector(".popup__close");
const buttonCloseAdd = popupAdd.querySelector(".popup__close");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const formEdit = popupEdit.querySelector(".popup__form");
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_job");
const inputPhotoName = formAdd.querySelector('.popup__input_type_title');
const inputPhotoLink = formAdd.querySelector('.popup__input_type_link');
const elementContainer = document.querySelector('.elements');

const popupImageCaption = popupImage.querySelector('.popup__caption');
const popupImagePhoto = popupImage.querySelector('.popup__photo');


import './index.css'
import { initialCards } from '../scripts/initialCards.js';
import { Card } from '../scripts/Card.js'
import { FormValidator } from '../scripts/FormValidator.js';
import { Section } from '../scripts/Section.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input-error',
};

const createCard = (photoName, photoLink) => {
  const card = new Card(photoName, photoLink, '.element-template', '.element__img');
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((item) => {
  elementContainer.append(
    createCard (item.name, item.link)
  );
});

const renderCard = (photoName, photoLink) => {
  elementContainer.prepend(createCard(photoName, photoLink));
};

const formValidatorEdit = new FormValidator(config, formEdit);
const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorEdit.enableValidation();
formValidatorAdd.enableValidation();


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


// function closeByClickOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// function openPopup(somePopup) {
//   somePopup.classList.add('popup_opened');
//   window.addEventListener('keydown', closeByEscape);

//   somePopup.addEventListener('click', closeByClickOverlay);
// }

function openProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');

  window.removeEventListener('keydown', closeByEscape);

  somePopup.removeEventListener('click', closeByClickOverlay);
}

export function openImagePopup(photoName, photoLink) {
  openPopup(popupImage);
  popupImageCaption.textContent = photoName;
  popupImagePhoto.src = photoLink;
  popupImagePhoto.alt = photoName;
}

const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.value = '';
  inputPhotoLink.value = '';
  closePopup(popupAdd);
  formValidatorAdd.disableSubmitButton();
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault()
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
};

formEdit.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => openProfilePopup(popupEdit));
profileAddButton.addEventListener('click', () => openPopup(popupAdd));
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
formAdd.addEventListener('submit', addCard);