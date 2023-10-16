export class Card {
    constructor(data, elementSelector, like, dislike, currentId, handleCardClick, handleDeleteClick) {
        this._data = data;
        this._elementSelector = elementSelector;
        this._like = like;
        this._dislike = dislike;
        this._userId = currentId;
        this._handleDeleteClick = handleDeleteClick;
        this._handleCardClick = handleCardClick;
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

    _getDeleteButton() {
        const cardDelete = this._element.querySelector('.element__delete');
        return cardDelete;
    };

    _getLikeButton() {
        const cardLike = this._element.querySelector('.element__button');
        return cardLike;
    };

    _getLikesCounter() {
        const likesCounter = this._element.querySelector('.element__button-amount');
        return likesCounter;
    };

    _getLikesAmount(arr) {
        this._likesCounter.textContent = arr.likes.length;
    };

    _setInitialCardSettings() {
        this._getLikesAmount(this._data)
        if (this._data.likes.some(element => element._id === this._userId)) {
            this._cardLike.classList.add('element__button_active');
        }
        if (this._data.owner._id !== this._userId) {
            this._cardDelete.remove();
        }
    };

    _handleLike() {
        this._like(this._data._id)
            .then((arr) => {
                this._cardLike.classList.add('element__button_active');
                this._getLikesAmount(arr)
            })
            .catch(err => console.log(err));
    };

    _handleDislike() {
        this._dislike(this._data._id)
            .then((arr) => {
                this._cardLike.classList.remove('element__button_active');
                this._getLikesAmount(arr)
            })
            .catch(err => console.log(err));
    };

    _setEventListeners() {
        this._image.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });
        this._cardDelete.addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._cardLike.addEventListener('click', () => {
            if (this._cardLike.classList.contains('element__button_active')) {
                this._handleDislike()
            } else {
                this._handleLike()
            }
        });
    };

    deleteCard() {
        this._element.remove();
        this._element = null;
    };
    generateCard() {
        this._element = this._getTemplate();
        this._image = this._getImage();
        this._image.alt = this._data.name;
        this._image.src = this._data.link;
        this._cardDelete = this._getDeleteButton();
        this._cardLike = this._getLikeButton();
        this._likesCounter = this._getLikesCounter();
        this._element.querySelector('.element__title').textContent = this._data.name;
        this._setInitialCardSettings();
        this._setEventListeners();
        return this._element;
    };
};