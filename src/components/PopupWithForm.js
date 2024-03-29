import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = this._popupElement.querySelector('.popup__form');
    this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close() {
    this._formSelector.reset();
    super.close();
  };
};