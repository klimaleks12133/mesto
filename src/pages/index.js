import {
  config,
  profileEditButton,
  profileAddButton,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  popupAddSubmit,
  popupEditSubmit,
  buttonAvatar,
  avatarSave,
  formAvatar,
  profileTitle,
  profileSubtitle,
  profileAvatar,
  popupConfirmSubmit,

} from '../utils/constants.js'

import './index.css'
import { myId } from "../utils/myId.js";
import { Card } from '../components/Card.js'
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { Section } from '../components/Section.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { Api } from '../components/Api.js';

function showLoading(isLoading, button, defaultText) {
  if (isLoading) {
    button.textContent = "Сохранение..."
  } else {
    button.textContent = defaultText
  }
};

function createCard(item) {
  const card = new Card(item, '.element-template', like, dislike, userId,
    () => {
      confirmPopup.open();
      confirmPopup.handleConfirm(() => {
        showLoading(true, popupConfirmSubmit)
        api.deleteCard(item._id)
          .then(() => card.deleteCard())
          .then(confirmPopup.close.bind(confirmPopup))
          .catch(err => console.log(err))
          .finally(() => {
            showLoading(false, popupConfirmSubmit, "Да")
          })
      })
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

const userInfo = new UserInfo({
  profileNameSelector: ".profile__usermane",
  profilePositionSelector: ".profile__about",
  profileAvatarSelector: ".profile__avatar",
});

const api = new Api(myId);
Promise.all([api.getUserInfo(), api.getInitialCard()])
  .then(([data, cards]) => {
    userInfo.setUserAvatar(data.avatar);
    userInfo.setUserInfo(data.name, data.about);
    userId = data._id;
    cardList.renderItems(cards.reverse());
  })
  .catch(err => {
    console.log(err);
  });

let userId;


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

const confirmPopup = new PopupWithConfirmation('.popup_confirm');
confirmPopup.setEventListeners();

const newAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (formData) => {
    showLoading(true, avatarSave)
    api.addNewAvatar(formData.link)
      .then((link) => {
        userInfo.setUserAvatar(link.avatar)
        newAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        showLoading(false, avatarSave, "Сохранить")
      });
  }
})
newAvatar.setEventListeners();


const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (formData) => {
    showLoading(true, popupEditSubmit)
    api.setUserInfo(formData.name, formData.about)
      .then(() => {
        userInfo.setUserInfo(formData.name, formData.about);
        popupEditProfile.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        showLoading(false, popupEditSubmit, "Сохранить")
      });
  }
});
popupEditProfile.setEventListeners();



const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    showLoading(true, popupAddSubmit)
    api.addNewCard(formData.title, formData.link)
      .then((data) => {
        cardList.addItem(createCard(data))
        popupAddCard.close();
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

// edit avatar listener
buttonAvatar.addEventListener('click', () => {
  newAvatar.open();
  avatarFormValidator.resetValidation(avatarSave);
});