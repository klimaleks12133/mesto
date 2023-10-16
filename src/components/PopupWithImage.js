import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImagePhoto = this._popupElement.querySelector('.popup__photo');
        this._popupImageCaption = this._popupElement.querySelector('.popup__caption')
    };

    open(data) {
        super.open();
        this._popupImagePhoto.src = data.link;
        this._popupImageCaption.textContent = data.name;
        this._popupImagePhoto.alt = data.name;
    };
};