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
const popupImage = document.querySelector('.popup-image');
const profileButton = content.querySelector(".profile__edit-button");
const profileAddButton = content.querySelector(".profile__add-button");
const buttonCloseImage = popupImage.querySelector('.popup-image__close');
const popupButtonClose = document.querySelector(".popup__close");
const closeAddButton = document.querySelector(".popup-add__close");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_job");
const formAdd = popupAdd.querySelector('.popup__form');
const inputPhotoName = formAdd.querySelector('.popup__input_type_title');
const inputPhotoLink = formAdd.querySelector('.popup__input_type_link');
const elementContainer = document.querySelector('.elements');

const createCard = (photoName, photoLink) => {

  const elementTemplate = document.querySelector('#element-template').content;

  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').textContent = photoName;
  element.querySelector('.element__img').src = photoLink;
  element.querySelector('.element__delete').addEventListener('click', () => {
    element.remove();
  });
  const buttonLike = element.querySelector('.element__button');
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('element__button_active');
  });
  const image = element.querySelector('.element__img');
  image.addEventListener('click', () => {
    openPopupImage();
    popupImage.querySelector('.popup-image__caption').textContent = photoName;
    popupImage.querySelector('.popup-image__photo').src = photoLink;
  });
  return element;
};

const renderCard = (photoName, photoLink) => {
  elementContainer.prepend(createCard(photoName, photoLink));
};

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
};

const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.value = '';
  inputPhotoLink.value = '';
}
closePopupAdd();

const createInitialCards = initialCards.map(function (initialCard) {
  renderCard(initialCard.name, initialCard.link);
});

function openPopupImage() {
  popupImage.classList.add('popup-image_opened');
};

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

function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
};

function closePopupButton() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupButton();
}

function openPopupImage() {
  popupImage.classList.add('popup-image_opened');
};

function closePopupImage() {
  popupImage.classList.remove('popup-image_opened');
};

popupForm.addEventListener("submit", handleFormSubmit);
profileButton.addEventListener("click", openProfileButton);
popupButtonClose.addEventListener("click", closePopupButton);
profileAddButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);
buttonCloseImage.addEventListener('click', closePopupImage);
popupImage.addEventListener('click', popupImage);
formAdd.addEventListener('submit', addCard);