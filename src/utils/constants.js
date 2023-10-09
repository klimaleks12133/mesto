export const initialCards = [
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
export const popupImage = document.querySelector('.popup_image');
export const popupImageCaption = popupImage.querySelector('.popup__caption');
export const popupImagePhoto = popupImage.querySelector('.popup__photo');
export const content = document.querySelector(".content");
export const popupEdit = document.querySelector(".popup_edit");
export const popupAdd = document.querySelector(".popup_add");
export const popupConfirm = document.querySelector('.popup_confirm');
export const profileEditButton = content.querySelector(".profile__edit-button");
export const profileAddButton = content.querySelector(".profile__add-button");
export const buttonCloseImage = popupImage.querySelector(".popup__close");
export const buttonCloseEdit = popupEdit.querySelector(".popup__close");
export const buttonCloseAdd = popupAdd.querySelector(".popup__close");
export const profileTitle = content.querySelector(".profile__usermane");
export const profileSubtitle = content.querySelector(".profile__about");
export const formEdit = popupEdit.querySelector(".popup__form");
export const formAdd = popupAdd.querySelector('.popup__form');
export const nameInput = document.querySelector(".popup__input_type_username");
export const jobInput = document.querySelector(".popup__input_type_job");
export const inputPhotoName = formAdd.querySelector('.popup__input_type_title');
export const inputPhotoLink = formAdd.querySelector('.popup__input_type_link');
export const elementContainer = document.querySelector('.elements');
export const buttonAvatar = document.querySelector('.profile__avatar-edit-button');
export const popupAvatar = document.querySelector('.popup_avatar');
export const formAvatar = popupAdd.querySelector('.popup__form');
export const avatarSave = popupAvatar.querySelector(".popup__form-submit");
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupAddSubmit = popupAdd.querySelector('.popup__form-submit');
export const popupEditSubmit = popupEdit.querySelector('.popup__form-submit');
export const popupConfirmSubmit = popupConfirm.querySelector('.popup__form-submit');

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input-error',
  };