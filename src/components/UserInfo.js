import { profileTitle, profileSubtitle, profileAvatar } from '../utils/constants.js';

export class UserInfo {
  // constructor({profileNameSelector, profilePositionSelector}) {
  //   this.profileTitle = document.querySelector(profileNameSelector);
  //   this.profileSubtitle = document.querySelector(profilePositionSelector);
  // }

  getUserInfo() {
    return {
      name: profileTitle.textContent,
      about: profileSubtitle.textContent,
    };
  }

  setUserInfo({ name, about }) {
    profileTitle.textContent = name;
    profileSubtitle.textContent = about;
  }
  setUserAvatar(link) {
    profileAvatar.src = link
  }
};