const popup = document.querySelector('.popup');                              // Находим блок с формой
const popupForm = document.querySelector('.popup__container');               // Находим форму
const popupOpenButton = document.querySelector('.profile__edit-button');     // Находим кнопку редактирования профиля
const popupCloseButton = popup.querySelector('.popup__close-button');        // Находим кнопку закрытия попапа
const popupSaveButton = popup.querySelector('.popup__save-button');          // Находим кнопку сохранения
const nameInput = popupForm.querySelector('.popup__input[name="name"]');      // Находим инпут с именем
const jobInput = popupForm.querySelector('.popup__input[name="job"]');        // Находим инпут с профессией
const profileName = document.querySelector('.profile__name');                // Находим элемент для вставки значений
const profileJob = document.querySelector('.profile__job');                  // Находим элемент для вставки значений

const popupToggle = function () {
  if (!popup.classList.contains('popup_opened')) {                           // Функция добавления / удаления класса видимости у попапа

    nameInput.value = profileName.textContent;                                  // Помещаем Имя в инпут формы
    jobInput.value = profileJob.textContent;                                    // Помещаем Профессию в инпут формы
    popup.classList.toggle('popup_opened');

  } else {
    popup.classList.toggle('popup_opened');
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();                                                      // Отменяем стандартное поведение формы
  // Вставляем значения инпутов в выбранные элементы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggle();                                                             // Закрываем попап
}
// Слушатели
popupForm.addEventListener('submit', formSubmitHandler);                     // Добавляем слушателя кнопке сохранения 
popupOpenButton.addEventListener('click', popupToggle);                      // Добавляем слушателя кнопке редактирования профиля
popupCloseButton.addEventListener('click', popupToggle);                     // Добавляем слушателя кнопке закрытия попапа