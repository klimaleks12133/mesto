const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add('popup__form_error');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove('popup__form_error');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__form-submit');
    inputList.forEach((inputElement) => {
        toggleButtonState(inputList, buttonElement);
        inputElement.addEventListener('input', function (evt) {
            evt.preventDefault(evt);
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement)
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            setEventListeners(formElement)
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button_inactive');
    } else {
        buttonElement.classList.remove('popup__submit-button_inactive');
    }
};

enableValidation();