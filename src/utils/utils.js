// import {
//     popupImage,
//     popupImageCaption,
//     popupImagePhoto
//   } from './constants.js';

// export function closePopup(somePopup) {
//     somePopup.classList.remove('popup_opened');

//     window.removeEventListener('keydown', closeByEscape);

//     somePopup.removeEventListener('click', closeByClickOverlay);
// };

// // export function closeByEscape(evt) {
// //     if (evt.key === 'Escape') {
// //         const openedPopup = document.querySelector('.popup_opened');
// //         closePopup(openedPopup);
// //     }
// // };

// // export function closeByClickOverlay(evt) {
// //     if (evt.target === evt.currentTarget) {
// //         const openedPopup = document.querySelector('.popup_opened');
// //         closePopup(openedPopup);
// //     }
// // };

// // export function openPopup(somePopup) {
// //     somePopup.classList.add('popup_opened');
// //     window.addEventListener('keydown', closeByEscape);

// //     somePopup.addEventListener('click', closeByClickOverlay);
// // };

// export function openImagePopup(photoName, photoLink) {
//     openPopup(popupImage);
//     popupImageCaption.textContent = photoName;
//     popupImagePhoto.src = photoLink;
//     popupImagePhoto.alt = photoName;
// }