export class Card {
    constructor(data, elementSelector, handleCardClick) {
        this._elementSelector = elementSelector;
        this._handleCardClick = handleCardClick;
        this._name = data.name;
        this._link = data.link;
    };

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
        this._image.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });
    };
    generateCard() {
        this._element = this._getTemplate();
        this._image = this._getImage();
        this._setEventListeners();
        this._image.alt = this._name;
        this._image.src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        return this._element;
    };
};