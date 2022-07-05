'use strict';

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const playerEl = document.querySelector('iframe');

const player = new Player(playerEl, {
  id: 19231868,
  width: 640,
});

let timeline = Number(localStorage.getItem(`timecode`));

player.setCurrentTime(timeline);

player.on(
  `timeupdate`,
  throttle(data => {
    localStorage.setItem(`timecode`, data.seconds);
  }, 1000)
);
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const iframe = document.querySelector('#vimeo-player');

// const player = new Player(iframe, {
//   id: 12332131312,
//   width: 640,
// });

// player.on(`timeupdate`, function (data) {
//   localStorage.setItem(`timecode`, seconds);
// });

// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.

// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }

// player.on('eventName', function (data) {
//   localStorage.setItem(`timecode`, data.seconds);
// });

// console.dir(localStorage.getItem);
// let currentTime = Number(localStorage.getItem(video));
// console.log(iframe.attributes);

// const timeLineEl = document.querySelector('div.vp-progress');
// console.log('timeLineEl :>> ', timeLineEl);
// const bodeEl = document.querySelector(`.vp-center`);
// console.dir('bodeEl :>> ', bodeEl);
// // console.dir(iframe.currentTime);
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
