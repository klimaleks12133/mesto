import {
  initialCards,
  config,
  // popupEdit,
  //popupAdd,
  profileEditButton,
  profileAddButton,
  // buttonCloseImage,
  // buttonCloseEdit,
  // buttonCloseAdd,
  // profileTitle,
  // profileSubtitle,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  buttonAvatar,
  popupAvatar,
  avatarSave,
  // inputPhotoName,
  // inputPhotoLink,
  // popupImage,
  // elementContainer,
} from '../utils/constants.js'
import { id } from "../utils/id.js";
import './index.css'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { Section } from '../components/Section.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'
import { Api } from '../components/Api.js'

function createCard(item) {
  const card = new Card(item, '.card-template', like, disike, currentId,
    () => {
      confirmPopup.openPopup();
      confirmPopup.handler(() =>
        api.deleteCard(item._id)
          .then(() => card.removeCard())
          .catch(err => console.log(err)))
    },
    () => {
      imagePopup.openPopup({ name: item.name, link: item.link });
    }
  );
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

const api = new Api(id);
api.getUserInfo()
  .then((data) => {
    userInfo.setUserAvatar(data.avatar)
    userInfo.setUserInfo(data.name, data.about);
  })
  .catch((err) =>
    console.log(err)
  );

api.getInitialCard()
  .then((items) => {
    cardList.renderItems(items.reverse());
  })
  .catch((err) =>
    console.log(err)
  );

const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();
const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();

// const userInfo = new UserInfo('.profile__usermane', '.profile__about');

const userInfo = new UserInfo({
  profileNameSelector: ".profile__usermane",
  profilePositionSelector: ".profile__about",
});

///////////////////////////////////////////////////////////////////////////////
const confirmPopup = new PopupWithConfirmation('.popup_confirm');
confirmPopup.setEventListeners();

const newAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  // handleFormSubmit: (formData) => {
  //     renderLoading(true, avatarSave)
  // api.createNewAvatar(formData.link)
  //     .then((link) => {
  //         userInfo.setUserAvatar(link.avatar)
  //         newAvatar.closePopup();
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //         renderLoading(false, avatarSaveButton, "Сохранить")
  //     });
  // }
})
newAvatar.setEventListeners();

////////////////////////////////////////////////////////////////////////////////

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo({ name: formData.name, about: formData.about });
    popupEditProfile.close()
  }
});
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard({ name: formData.title, link: formData.link }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

const editProfile = () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
  popupEditProfile.open();
  formValidatorEdit.resetValidation();
};

profileEditButton.addEventListener('click', editProfile);

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formValidatorAdd.resetValidation();
});

buttonAvatar.addEventListener('click', () => {
  newAvatar.open();
});