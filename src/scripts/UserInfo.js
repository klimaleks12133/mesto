import { profileTitle, profileSubtitle } from "../utils/constants.js";

export class UserInfo {

  getUserInfo() {
    const userInfo = {
      profileNameInput: profileTitle.textContent,
      profileInfoInput: profileSubtitle.textContent
    }
    return userInfo
  };

  setUserInfo(name, position) {
    profileTitle.textContent = name;
    profileSubtitle.textContent = position;
  };
};