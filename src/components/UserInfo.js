export class UserInfo {
  constructor(profileNameSelector, profilePositionSelector) {
    this._profileTitle = document.querySelector(profileNameSelector);
    this._profileSubtitle = document.querySelector(profilePositionSelector);
  };

  getUserInfo() {
    this._userInfo = {
      profileNameInput: this._profileTitle.textContent,
      profileInfoInput: this._profileSubtitle.textContent
    }
    return this._userInfo;
  };

  setUserInfo(name, position) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = position;
  };
};