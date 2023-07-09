const content = document.querySelector(".content");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupImage = document.querySelector('.popup_image');
const profileEditButton = content.querySelector(".profile__edit-button");
const profileAddButton = content.querySelector(".profile__add-button");
const buttonCloseImage = popupImage.querySelector(".popup__close");
const buttonCloseEdit = document.querySelector(".popup__close");
const buttonCloseAdd = document.querySelector(".popup__close");
const profileTitle = content.querySelector(".profile__usermane");
const profileSubtitle = content.querySelector(".profile__about");
const formEdit = document.querySelector(".popup__form");
const formAdd = popupAdd.querySelector('.popup__form');
const nameInput = document.querySelector(".popup__input_type_username");
const jobInput = document.querySelector(".popup__input_type_job");
const inputPhotoName = formAdd.querySelector('.popup__input_type_title');
const inputPhotoLink = formAdd.querySelector('.popup__input_type_link');
const elementContainer = document.querySelector('.elements');

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


function closeByClickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(somePopup) {
  somePopup.classList.add('popup_opened');
  window.addEventListener('keydown', closeByEscape);

  somePopup.addEventListener('click', closeByClickOverlay);
}

function profileInsert() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');

  window.removeEventListener('keydown', closeByEscape);

  somePopup.removeEventListener('click', closeByClickOverlay);
  if (!somePopup.classList.contains('popup_image')) {
    somePopup.querySelector('.popup__form').reset();
  };

  const errorList = Array.from(somePopup.querySelectorAll('.popup__input-error'));
  errorList.forEach((error) => error.textContent = '');

  const inputList = Array.from(somePopup.querySelectorAll('.popup__input'));
  inputList.forEach((input) => input.classList.remove('popup__form_error'));

  const buttonElement = somePopup.querySelector('.popup__form-submit');
  if (somePopup.classList.contains('popup_edit')) {
    buttonElement.classList.remove('popup__submit-button_inactive');
  }

  else if (somePopup.classList.contains('popup_add')) {
    buttonElement.classList.add('popup__submit-button_inactive');
  };
}

const createCard = (photoName, photoLink) => {

  const elementTemplate = document.querySelector('#element-template').content;

  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__title').textContent = photoName;
  element.querySelector('.element__img').src = photoLink;
  element.alt = photoName;

  element.querySelector('.element__delete').addEventListener('click', () => {
    element.remove();
  });
  const buttonLike = element.querySelector('.element__button');
  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('element__button_active');
  });
  const image = element.querySelector('.element__img');
  image.addEventListener('click', () => {
    openPopup(popupImage);
    popupImage.querySelector('.popup__caption').textContent = photoName;
    popupImage.querySelector('.popup__photo').src = photoLink;
    popupImage.alt = photoName;
  });
  return element;
};

const renderCard = (photoName, photoLink) => {
  elementContainer.prepend(createCard(photoName, photoLink));
};

const addCard = (evt) => {
  if (!formAdd.querySelector('.popup__form-submit').classList.contains('popup__submit-button_inactive')) {
    evt.preventDefault();
    const photoName = inputPhotoName.value;
    const photoLink = inputPhotoLink.value;
    renderCard(photoName, photoLink);
    inputPhotoName.reset = '';
    inputPhotoLink.value = '';
    closePopup(popupAdd);
  };
}

initialCards.forEach(function (initialCard) {
  renderCard(initialCard.name, initialCard.link);
});

const handleProfileFormSubmit = (evt) => {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
};

formEdit.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", () => profileInsert(popupEdit));
profileAddButton.addEventListener('click', () => openPopup(popupAdd));
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
popupImage.addEventListener('click', popupImage);
formAdd.addEventListener('submit', addCard);