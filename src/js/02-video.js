const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
    });

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});



/* player.setCurrentTime(localStorage.getItem()).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});  */
/* 
1. Zapoznaj się z dokumentacją biblioteki odtwarzacza Vimeo.
2. Dodaj bibliotekę jako zależność projektu poprzez npm.
3. Inicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN.4. Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
5. Zapisuj czas odtwarzania w local storage. Niech kluczem do storage będzie "videoplayer-current-time".
6. Do przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
7 Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę. */