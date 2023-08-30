import {
  initialCards,
  config,
  popupEdit,
  popupAdd,
  profileEditButton,
  profileAddButton,
  buttonCloseImage,
  buttonCloseEdit,
  buttonCloseAdd,
  profileTitle,
  profileSubtitle,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  inputPhotoName,
  inputPhotoLink,
  popupImage,
  elementContainer,
} from '../utils/constants.js'

import './index.css'
//import { initialCards } from '../scripts/initialCards.js';
import { DefaultCards } from '../scripts/Card.js'
import { FormValidator } from '../scripts/FormValidator.js';
import { UserInfo } from '../scripts/UserInfo.js'
import { PopupWithForm } from '../scripts/PopupWithForm.js'
import { PopupWithImage } from '../scripts/PopupWithImage.js'
import { Section } from '../scripts/Section.js'



function createCard(item) {
  const card = new DefaultCards(item, '.element-template', () => {
    imagePopups.open({ name: item.name, link: item.link });
  });
  const cardElement = card.generateCard();
  return cardElement;
};


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},
  '.elements');
cardList.renderItems();

const imagePopups = new PopupWithImage(popupImage);
imagePopups.setEventListeners();

const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();

const userInfo = new UserInfo();

const newProfile = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.position);
  }
});
newProfile.setEventListeners();

const newCard = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    console.log(formData);
    cardList.addItem(createCard({ name: formData.place, link: formData.link }));
  }
});
newCard.setEventListeners();

// edit button listener
profileEditButton.addEventListener('click', () => {
  profileTitle.value = userInfo.getUserInfo().profileNameInput;
  profileSubtitle.value = userInfo.getUserInfo().profileInfoInput;
  newProfile.open();
  formValidatorEdit.resetValidation();
});

// add button listener
profileAddButton.addEventListener('click', () => {
  newCard.open();
  formValidatorAdd.resetValidation();
});




// function openProfilePopup() {
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileSubtitle.textContent;
//   openPopup(popupEdit);
// }

// const addCard = (evt) => {
//   evt.preventDefault();
//   const photoName = inputPhotoName.value;
//   const photoLink = inputPhotoLink.value;
//   renderCard(photoName, photoLink);
//   inputPhotoName.value = '';
//   inputPhotoLink.value = '';
//   closePopup(popupAdd);
//   formValidatorAdd.disableSubmitButton();
// };

// const handleProfileFormSubmit = (evt) => {
//   evt.preventDefault()
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = jobInput.value;
//   closePopup(popupEdit);
// };

// formEdit.addEventListener("submit", handleProfileFormSubmit);
// profileEditButton.addEventListener("click", () => openProfilePopup(popupEdit));
// profileAddButton.addEventListener('click', () => openPopup(popupAdd));
// buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
// buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
// buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
// formAdd.addEventListener('submit', addCard);