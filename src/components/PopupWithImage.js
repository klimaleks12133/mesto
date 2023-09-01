import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImagePhoto = this._popupElement.querySelector('.popup__photo');
        this.popupImageCaption = this._popupElement.querySelector('.popup__caption')
    };

    open(data) {
        super.open();
        this.popupImagePhoto.src = data.link;
        this.popupImageCaption.textContent = data.name;
        this.popupImagePhoto.alt = data.name;
    };
};