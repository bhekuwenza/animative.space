/**
 * Video Block
 * 
 * Using "Plyr.js ( 3.6.9 - 2021-11-19 )" as media controller for cell.
 */

// Helper Functions

const lazyInit = (element, fn) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        observer.disconnect();
        fn();
      }
    },
    {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(element);
};

const asyncStyle = (url, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  style.onreadystatechange = callback;
  style.onload = callback;

  // Fire the loading
  head.appendChild(style);
}

const asyncScript = (url, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // console.log(script);
  // Fire the loading
  head.appendChild(script);
}

// Logic Functions

export const IntersectionTogglePlayback = (element, player) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        if (!player.playing) player.play();
      } else {
        if (player.playing) player.pause();
      }
    },
    {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(element);
};

export let players = [];

export let cellMedia = {
  videoCell: [],
  audioCell: [],
  embedCell: []
};

const initMedia = (selector, objects) => {
  if (objects.length <= 0) { return }

  for (let i = 0; i < objects.length; i++) {
    const figure = objects[i];

    lazyInit(figure, function () {
      const initClient = () => setTimeout(() => { figure.classList.add('loaded') }, 1000);

      let mediaElement = 0;
      const mediaWrapper = figure.querySelector('.media');
      const template = mediaWrapper.querySelector('template');
      if (mediaWrapper && template) {
        const clone = template.content.cloneNode(true);
        mediaWrapper.appendChild(clone);
        mediaWrapper.removeChild(template);
        mediaElement = mediaWrapper.children[0]
      } else if (mediaWrapper && !template) {
        mediaElement = mediaWrapper
      }

      if (mediaElement && !figure.classList.contains('self')) {

        const iframe = ['iframe', 'IFRAME'].includes(mediaElement.tagName)

        if (iframe) mediaElement = mediaWrapper

        const autoplay = (!iframe) ? mediaElement.hasAttribute('autoplay') : false;

        //  alter settings
        let defaultConfig = {
          controls: [
            'play-large', 'fullscreen'
          ],
          captions: { active: false, language: 'auto', update: false },
          iconUrl: '/js/plugins/plyr.svg',
          fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: false,
            container: null
          },
          autopause: true,
          storage: {
            enabled: false,
            key: 'cell_plyr'
          },
          hideControls: (!/Android/.test(navigator.userAgent))
        }

        const newPlayer = new Plyr(mediaElement, defaultConfig);

        players.push(newPlayer);

        newPlayer.on('play', function () {
          const customPlayers = document.querySelectorAll('video.custom, audio.custom');
          let cellplayers = Object.assign(players, customPlayers);
          cellplayers.forEach(function (other) {
            other.pause();
          })
        });

        newPlayer.on('ready', () => {
          // remove placeholders from cell
          initClient();
        });

        // toggle play/pause on enter/leave view
        if (autoplay) {
          console.log(newPlayer.isHTML5)
          IntersectionTogglePlayback(mediaWrapper, newPlayer);
        }
      } else {
        // remove placeholders from cell
        initClient();
      }
    }
    );
  }

  // ;[...objects].forEach((figure) => lazyInit(
  //   figure, function () {
  //     const initClient = () => setTimeout(() => { figure.classList.add('loaded') }, 1000);

  //     let mediaElement = 0;
  //     const mediaWrapper = figure.querySelector('.media');
  //     const template = mediaWrapper.querySelector('template');
  //     if (mediaWrapper && template) {
  //       const clone = template.content.cloneNode(true);
  //       mediaWrapper.appendChild(clone);
  //       mediaWrapper.removeChild(template);
  //       mediaElement = mediaWrapper.children[0]
  //     } else if (mediaWrapper && !template) {
  //       mediaElement = mediaWrapper
  //     }

  //     if (mediaElement) {

  //       if (['iframe', 'IFRAME'].includes(mediaElement.tagName)) mediaElement = mediaWrapper
  //       const newPlayer = new Plyr(mediaElement);

  //       players.push(newPlayer);

  //       newPlayer.on('play', function () {
  //         const customPlayers = document.querySelectorAll('video.custom, audio.custom');
  //         let cellplayers = Object.assign(players, customPlayers);
  //         cellplayers.forEach(function (other) {
  //           other.pause();
  //         })
  //       });

  //       newPlayer.on('ready', () => {
  //         // remove placeholders from cell
  //         initClient();
  //       });

  //       // toggle play/pause on enter/leave view
  //       IntersectionTogglePlayback(mediaWrapper, newPlayer);
  //     } else {
  //       // remove placeholders from cell
  //       initClient();
  //     }
  //   }
  // ))
}

const initEmbed = (objects) => {
  [...objects].forEach((embed) => lazyInit(
    embed,
    function () {
      const mediaWrapper = embed.querySelector('.media');
      const template = mediaWrapper.querySelector('template');
      if (mediaWrapper && template) {
        const clone = template.content.cloneNode(true);
        mediaWrapper.appendChild(clone);
      }

      // remove placeholders from cell
      setTimeout(() => { embed.classList.add('loaded') }, 1000);
    }
  ))
}

export const readyVideos = () => {
  cellMedia.videoCell = document.querySelectorAll(
    '.cell.video'
  );

  cellMedia.audioCell = document.querySelectorAll(
    '.cell.audio'
  );

  cellMedia.embedCell = document.querySelectorAll(
    '.cell.embed'
  );

  if (cellMedia.videoCell.length > 0 || cellMedia.audioCell.length > 0) {
    // load media controller in async way.
    asyncStyle(
      "/js/plugins/plyr.css",
      asyncScript("/js/plugins/plyr.js", () => {
        if (cellMedia.videoCell.length > 0) initMedia('video', cellMedia.videoCell);
        if (cellMedia.audioCell.length > 0) initMedia('audio', cellMedia.audioCell);
      })
    );
  }

  if (cellMedia.embedCell.length > 0) initEmbed(cellMedia.embedCell);
}
