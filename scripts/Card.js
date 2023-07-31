import { openImagePopup } from '../scripts/index.js'

export class Card {
    constructor(photoName, photoLink, elementSelector) {
        this._photoName = photoName;
        this._photoLink = photoLink;
        this._elementSelector = elementSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._elementSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.element__button').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._handleImageClick(this._photoName, this._photoLink);
        });
    }

    _handleDeleteClick() {
        this._element = null;
    }

    _handleImageClick() {
        openImagePopup (this._photoName, this._photoLink)
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__img').src = this._photoLink;
        this._element.querySelector('.element__img').alt = this._photoName;
        this._element.querySelector('.element__title').textContent = this._photoName;
        return this._element;
    }
}