import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (timeStorage) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeStorage.seconds)
    );
    //console.log('played the video!');
  }, 1000)
);



const savedTime = localStorage.getItem('videoplayer-current-time'); 
//console.log(savedTime);

player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

        default:
        // some other error occurred
        break;
    }
  }
  );

  player.on('ended', function(data){
    //console.log('Ended');
    localStorage.clear();
    document.location.reload()
  });
