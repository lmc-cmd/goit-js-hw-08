'use strict';
import player from '@vimeo/player';

const iframe = document.querySelector('iframe');

// console.log(iframe.attributes);
const timeLineEl = document.querySelector('div.vp-progress');
console.log('timeLineEl :>> ', timeLineEl);
const bodeEl = document.querySelector(`.vp-center`);
console.dir('bodeEl :>> ', bodeEl);
// console.dir(iframe.currentTime);
// getCurrentTime(iframe);
// const PlayedEl = document.querySelector('played');
// console.log(iframe);
// iframe.addEventListener(`click`, e => {
//   e.preventDefault;
//   console.log(`e.target`);
//   localStorage.setItem(e);
// });
// // player

//   .getCurrentTime()
//   .then(function (seconds) {
//     console.log(seconds);
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });

// + [getCurrentTime](#getcurrenttime-promisenumber-error)
//     + [setCurrentTime](#setcurrenttimeseconds-number-promisenumber-rangeerrorerror)
//     + [getDuration](#getduration-promisenumber-error)

// player
//   .getCurrentTime()
//   .then(function (seconds) {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
