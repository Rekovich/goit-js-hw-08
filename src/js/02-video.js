import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function onPlaying(e) {
    // console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlaying, 1000));



