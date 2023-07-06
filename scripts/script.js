const content = document.querySelector(".content");
const popupEdit = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup_add");
const popupImage = document.querySelector('.popup_image');
const profileEditButton = content.querySelector(".profile__edit-button");
const profileAddButton = content.querySelector(".profile__add-button");
const buttonCloseImage = popupImage.querySelector(".popup__close");
const popupEditClose = document.querySelector(".popup__close");
const closeAddButton = document.querySelector(".popup__close_add");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const formEdit = document.querySelector(".popup__form");
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_job");
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
    popupImage.querySelector('.popup__caption').textContent = photoName;
    popupImage.querySelector('.popup__photo').src = photoLink;
  });
  return element;
};

const renderCard = (photoName, photoLink) => {
  elementContainer.prepend(createCard(photoName, photoLink));
};

const addCard = (evt) => {
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.reset = '';
  inputPhotoLink.value = '';
  closePopupAdd();
}


initialCards.forEach(function (initialCard) {
  renderCard(initialCard.name, initialCard.link);
});

function openPopupImage() {
  popupImage.classList.add('popup_image_opened');
};

function openProfilePopup() {
  popupEdit.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openPopupAdd() {
  popupAdd.classList.add('popup_add_opened');
}

function openPopupImage() {
  popupImage.classList.add('popup_image_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closeProfilePopup();
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_add_opened');
};

function closePopupImage() {
  popupImage.classList.remove('popup_image_opened');
};

function closeProfilePopup() {
  popupEdit.classList.remove("popup_opened");
}

function closePopupImage() {
  popupImage.classList.remove('popup_image_opened');
};

formEdit.addEventListener("submit", handleFormSubmit);
profileEditButton.addEventListener("click", openProfilePopup);
popupEditClose.addEventListener("click", closeProfilePopup);
profileAddButton.addEventListener('click', openPopupAdd);
closeAddButton.addEventListener('click', closePopupAdd);
buttonCloseImage.addEventListener('click', closePopupImage);
popupImage.addEventListener('click', popupImage);
formAdd.addEventListener('submit', addCard);