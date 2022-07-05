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
