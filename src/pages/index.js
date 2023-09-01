import {
  initialCards,
  config,
  // popupEdit,
  // popupAdd,
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
  // popupImage,
  elementContainer,
} from '../utils/constants.js'

import './index.css'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { Section } from '../components/Section.js'

function createCard(item) {
  const card = new Card(item, '.element-template', () => {
    imagePopup.open({ name: item.name, link: item.link });
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

const imagePopup = new PopupWithImage('.popup_image');
imagePopup.setEventListeners();

const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();

const userInfo = new UserInfo('.profileTitle', '.profileSubtitle');

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.position);
    popupEditProfile.close()
  }
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard({ name: formData.place, link: formData.link }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

profileEditButton.addEventListener('click', () => {
  profileTitle.value = userInfo.getUserInfo().profileNameInput;
  profileSubtitle.value = userInfo.getUserInfo().profileInfoInput;
  popupEditProfile.open();
  formValidatorEdit.resetValidation();
});

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formValidatorAdd.resetValidation();
});