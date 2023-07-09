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

function openPopup(somePopup) {
  somePopup.classList.add('popup_opened');
}

function profileInsert() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');
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
  evt.preventDefault();
  const photoName = inputPhotoName.value;
  const photoLink = inputPhotoLink.value;
  renderCard(photoName, photoLink);
  inputPhotoName.reset = '';
  inputPhotoLink.value = '';
  closePopup(popupAdd);
};

initialCards.forEach(function (initialCard) {
  renderCard(initialCard.name, initialCard.link);
});

function formSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener("submit", formSubmit);
profileEditButton.addEventListener("click", () => profileInsert(popupEdit));
profileAddButton.addEventListener('click', () => openPopup(popupAdd));
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
buttonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));
popupImage.addEventListener('click', popupImage);
formAdd.addEventListener('submit', addCard);