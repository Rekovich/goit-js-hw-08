import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

