export class UserInfo {
  constructor(profileNameSelector, profilePositionSelector) {
    this._profileTitle = document.querySelector(profileNameSelector);
    this._profileSubtitle = document.querySelector(profilePositionSelector);
  };

  getUserInfo() {
    const userInfo = {
      profileNameInput: this._profileTitle.textContent,
      profileInfoInput: this._profileSubtitle.textContent
    }
    return userInfo
  };

  setUserInfo(name, position) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = position;
  };
};