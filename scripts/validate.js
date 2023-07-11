const showInputError = (inputElement, errorMessage, config) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (inputElement, config) => {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
};

const setEventListener = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });


    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (!formElement.checkValidity()) return;
    });
};
function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);

    [...formsList].forEach(function (formElement) {
        setEventListener(formElement, config);
    });
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__form-submit',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__input-error',
};

enableValidation(config);