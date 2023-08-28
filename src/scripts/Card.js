import { openImagePopup } from '../pages/index.js'

export class Card {
    constructor(elementSelector, handleCardClick) {
        this._elementSelector = elementSelector;
        this.handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._elementSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _getImage() {
        const elementImage = this._element.querySelector('.element__img');
        return elementImage;
    }

    // _setEventListeners() {
    //     this._element.querySelector('.element__delete').addEventListener('click', () => {
    //         this._handleDeleteClick();
    //     });
    //     this._element.querySelector('.element__button').addEventListener('click', () => {
    //         this._handleLikeClick();
    //     });
    //     this._element.querySelector('.element__img').addEventListener('click', () => {
    //         this._handleImageClick(this._photoName, this._photoLink);
    //     });
    // }

    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }

    _handleLikeClick() {
        this._element.querySelector('.element__button').classList.toggle('element__button_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.element__button').addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    };
};

export class DefaultCards extends Card {
    constructor(data, cardSelector, handleCardClick) {
        super(cardSelector, handleCardClick);
        this._name = data.name;
        this._link = data.link;
    };
    
    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();
        this._element.querySelector('.element__img').src = this._photoLink;
        this._element.querySelector('.element__img').alt = this._photoName;
        this._element.querySelector('.element__title').textContent = this._photoName;
        return this._element;
    };
};
