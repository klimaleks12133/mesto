export class UserInfo {
  constructor({profileNameSelector, profilePositionSelector}) {
    this.profileTitle = document.querySelector(profileNameSelector);
    this.profileSubtitle = document.querySelector(profilePositionSelector);
  }

  getUserInfo() {
    return {
      name: this.profileTitle.textContent,
      about: this.profileSubtitle.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this.profileTitle.textContent = name;
    this.profileSubtitle.textContent = about;
  }
};