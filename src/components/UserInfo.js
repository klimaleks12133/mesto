export class UserInfo {
  constructor({ profileNameSelector, profilePositionSelector, profileAvatarSelector }) {
    this._profileTitle = document.querySelector(profileNameSelector);
    this._profileSubtitle = document.querySelector(profilePositionSelector);
    this._profileAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileTitle.textContent,
      about: this._profileSubtitle.textContent
    }
    return userInfo
  };

  setUserInfo( name, about ) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = about;
  };
  setUserAvatar(link) {
    this._profileAvatar.src = link;
  };
};