export class UserInfo {
  constructor({ profileTitle, profileSubtitle, profileAvatar }) {
    this._profileTitle = profileTitle;
    this._profileSubtitle = profileSubtitle;
    this._profileAvatar = profileAvatar
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