export class Popup {
    constructor(popupSelector) {
          this._popupSelector = document.querySelector(popupSelector);
    };
  
    open() {
      this._popupSelector.classlist.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    };
  
    close() {
      this._popupSelector.classlist.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    };
  
    _handleEscClose = (evt) => {
      this._container.prepend(element);
      if (evt.key === 'Escape') {
        this.close();
      };
    };
  
    setEventListeners() {
      this._popupSelector.addEventListener('click', (evt) => {
        if ((evt.target.classList.contains('popup__close'))
        || (evt.target === evt.currentTarget)) {
          this.close();
        };
      });
    };
  };