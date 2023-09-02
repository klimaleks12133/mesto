import {
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
  buttonAvatar,
  popupAvatar,
  formAvatar,
  nameInput,
  jobInput,
  popupAddSubmit,
  popupEditSubmit,
  popupAvatarSubmit,
  // inputPhotoName,
  // inputPhotoLink,
  // popupImage,
  // elementContainer,
} from '../utils/constants.js'
import { myId } from "../utils/myId.js";
import './index.css'
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js'
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { Section } from '../components/Section.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'
import { Api } from '../components/Api.js'

function showLoading(isLoading, button, defaultText) {
  if (isLoading) {
      button.textContent = "Сохранение..."
  } else {
      button.textContent = defaultText
  }
};

function createCard(item) {
   const card = new Card(item, '.card-template', like, dislike,
    () => {
      confirmPopup.open();
      confirmPopup.handleConfirm(() =>
        api.deleteCard(item._id)
          .then(() => card.deleteCard())
          .catch(err => console.log(err)))
    },
    () => {
      imagePopup.open({ name: item.name, link: item.link });
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},
  '.elements');

const userInfo = new UserInfo();

const api = new Api(myId);

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

const like = id => api.like(id);
const dislike = id => api.dislike(id);

const formValidatorEdit = new FormValidator(config, formEdit);
formValidatorEdit.enableValidation();

const formValidatorAdd = new FormValidator(config, formAdd);
formValidatorAdd.enableValidation();

const avatarFormValidator = new FormValidator(config, formAvatar);
avatarFormValidator.enableValidation();

const imagePopup = new PopupWithImage('.popup_image');
imagePopup.setEventListeners();
// const userInfo = new UserInfo({
//   profileNameSelector: ".profile__usermane",
//   profilePositionSelector: ".profile__about",
// });

///////////////////////////////////////////////////////////////////////////////
const confirmPopup = new PopupWithConfirmation('.popup_confirm');
confirmPopup.setEventListeners();

const newAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (formData) => {
    showLoading(true, popupAvatarSubmit)
    api.addNewAvatar(formData.link)
      .then((link) => {
        userInfo.setUserAvatar(link.avatar)
        newAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        showLoading(false, popupAvatarSubmit, "Сохранить")
      });
  }
})
newAvatar.setEventListeners();

////////////////////////////////////////////////////////////////////////////////

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (formData) => {
    showLoading(true, popupEditSubmit)
    api.setUserInfo(formData.name, formData.about)
      .then(() => {
        userInfo.setUserInfo(formData.name, formData.about);
        newProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, popupEditSubmit, "Сохранить")
      });
  }
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    showLoading(true, popupAddSubmit)
    api.addNewCard(formData.name, formData.link)
      .then((data) => {
        cardList.addItem(createCard(data))
        newCard.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        showLoading(false, popupAddSubmit, "Создать")
      })
  }
});
popupAddCard.setEventListeners();

const editProfile = () => {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
  popupEditProfile.open();
  formValidatorEdit.resetValidation(popupEditSubmit);
};

profileEditButton.addEventListener('click', editProfile);

profileAddButton.addEventListener('click', () => {
  popupAddCard.open();
  formValidatorAdd.resetValidation(popupAddSubmit);
});

buttonAvatar.addEventListener('click', () => {
  newAvatar.open();
  avatarFormValidator.resetValidation(popupAvatarSubmit)
});