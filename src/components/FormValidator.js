export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }
    _showInputError(inputElement) {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;;
    };

    _hideInputError(inputElement)  {
        const errorElement = document.getElementById(`${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _enableSubmitButton(buttonElement) {
        buttonElement.classList.remove(this._config.inactiveButtonClass),
            buttonElement.removeAttribute('disabled');
    };

    _disableSubmitButton(buttonElement) {
        buttonElement.classList.add(this._config.inactiveButtonClass),
            buttonElement.setAttribute('disabled', true);
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitButton(buttonElement);
        } else {
            this._enableSubmitButton(buttonElement);
        }
    };

    _setEventListeners = () => {
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            });
        });
    };

    enableValidation = () => {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
    resetValidation(buttonElement) {
        this._inputList.forEach((inputElement) => {
            this._toggleButtonState(this._inputList, buttonElement);
            this._hideInputError(inputElement);
        });
    };
};