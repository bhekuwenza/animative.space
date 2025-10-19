export const readyShow = () => {
  /**
   * Helper Functions
   */

  /**
   * Class helper
   * @param className
   * @param method
   * @param element
   * @returns {*}
   * @example curry(updateClass)('myClass')('contains')
   * @example curry(updateClass)('myClass')('add')
   * @example curry(updateClass)('myClass')('remove')
   */
  let updateClass = function (element, method, className) {
    return element.classList[method](className);
  };

  let lazyInit = (element, fn) => {
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

  /**
   * Declare Cell Elements
   */

  // Image Popup
  const shows = document.getElementsByClassName(
    'cell show inline'
  );
  if (shows.length > 0) {
    [...shows].forEach((show) => {
      lazyInit(show, () => {
        const contents = '<span></span>';
        const iconCaret = `
        <svg 
          class="line" 
          viewBox="0 0 32 32"
        >
          <polyline 
            class="line" 
            fill="none" 
            stroke-width="2" 
            stroke-miterlimit="10" 
            points="21,30.4 10.8,16.1 21,1.5"
          />
        </svg>
      `;
        let btnNext = document.createElement('button');
        let btnPrev = document.createElement('button');

        updateClass(btnNext, 'add', 'show-btn-next');
        updateClass(btnPrev, 'add', 'show-btn-prev');

        btnPrev.innerHTML = iconCaret;

        const slides = show.childElementCount;

        let info = document.createElement('div');

        updateClass(info, 'add', 'show-info');

        let infoHtml = `
        <span class="status">
          <span class="position">1</span> / 
          <span class="count">${slides}</span>
        </span> &mdash;
        <span class="btn-toggle-info">
          info
        </span>
      `;
        info.innerHTML = infoHtml;

        const infoPosition = info.querySelector('.position');

        show.appendChild(btnNext);
        show.appendChild(btnPrev);
        show.appendChild(info);

        show.classList.add('loaded');
        info.setAttribute('count', slides);

        function updatePosition (dir) {
          const currentPosition = parseInt(show.dataset.pos);
          const newPosition =
            dir === 'next'
              ? currentPosition !== slides
                ? currentPosition + 1
                : 1
              : currentPosition !== 1
                ? currentPosition - 1
                : slides;
          infoPosition.innerHTML = newPosition;
          show.dataset.pos = newPosition;
        }

        btnNext.addEventListener('click', () => {
          updatePosition('next');
        });

        btnPrev.addEventListener('click', () => {
          updatePosition('prev');
        });
      });
    });
  }

  // Image Popup
  const figures = document.getElementsByClassName(
    'cell pop'
  );
  if (figures.length > 0) {

    let timeOut = false;
    let timeOutInterval = null;

    let popContainer = document.createElement('figure');
    popContainer.classList.add('cell', 'image', 'compact', 'popper');

    let popContainerWrapper = document.createElement("div");
    updateClass(popContainerWrapper, 'add', 'wrapper');

    let popContainerMedia = document.createElement("div");
    updateClass(popContainerMedia, 'add', 'media');

    let popContainerImg = document.createElement('img');
    let popContainerCaption = document.createElement("figcaption");

    popContainer.appendChild(popContainerWrapper);

    popContainerWrapper.appendChild(popContainerMedia);
    popContainerWrapper.appendChild(popContainerCaption);

    popContainerMedia.appendChild(popContainerImg);

    document.body.appendChild(popContainer);

    popContainerMedia.addEventListener('click', () => {
      if (!timeOut && updateClass(popContainer, 'contains', 'popping')) {
        updateClass(popContainer, 'remove', 'popping');
      }
    });

    [...figures].forEach((figure) => {

      const popMedia = figure.querySelector('.media');
      const popSrc = figure.getElementsByTagName('img')[0].getAttribute('data-src');

      const popCaption = figure.querySelector('figcaption');

      popMedia.addEventListener('click', () => {

        timeOut = true; window.clearInterval(timeOutInterval);
        timeOutInterval = setTimeout(() => {
          timeOut = false;
        }, 500);

        updateClass(popContainer, 'add', 'popping');
        popContainerImg.src = popSrc;

        if (popCaption) {
          popContainerCaption.innerHTML = popCaption.innerHTML;
          updateClass(popContainerCaption, 'remove', 'hide');
        } else {
          updateClass(popContainerCaption, 'add', 'hide');
        }

      });

    });
  }

  // Video
  const videos = document.getElementsByClassName(
    'cell video inline'
  );

  // Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  //   get: function () {
  //     return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  //   }
  // });

  if (videos.length > 0) {

    [...videos].forEach((cellVideoObj) => {
      // dynamic play icon for visual indication
      const icons = [
        {
          'label': 'play',
          'icon': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="32" height="32"><path fill="currentColor" d="M7.3,27l21.3-11L7.3,5V27z"/></svg>',
          'element': null
        },
        {
          'label': 'pause',
          'icon': '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 32 32" xml:space="preserve" width="32" height="32"><path fill="currentColor" d="M14.2,27h-3.7V5h3.7V27z M21.5,5h-3.7v22h3.7V5z"/></svg >',
          'element': null
        },
        {
          'label': 'expand',
          'icon': '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="32" height="32"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M19 11h4v4m-10 6H9v-4M5 6h22c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1z"/></svg>',
          'element': null
        },
        {
          'label': 'contract',
          'icon': '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="32" height="32"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M23 15h-4v-4M9 17h4v4M5 6h22c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1z"/></svg>',
          'element': null
        }
      ];

      // declare objects to work from
      const html = document.querySelector('html');
      const videoWrapperMedia = cellVideoObj.getElementsByClassName('media')[0];
      const videoElement = cellVideoObj.getElementsByTagName('video')[0];

      if (videoElement) {
        for (let i = 0, length = icons.length; i < length; i++) {
          // virtual create icon wrapper
          const label = icons[i].label;
          const graphic = icons[i].icon;
          const newIcon = document.createElement('button');
          newIcon.setAttribute('aria-label', label + ' video')
          newIcon.innerHTML = graphic;
          newIcon.classList.add('btn', label);
          // replace 
          icons[i] = newIcon.outerHTML.toString();
        }
        videoWrapperMedia.insertAdjacentHTML(
          'afterbegin',
          icons.join(' ')
        );

        const expandIcon = cellVideoObj.querySelector('.btn.expand');
        const contractIcon = cellVideoObj.querySelector('.btn.contract');

        // expandIcon.addEventListener('click', () => {
        //   updateClass(cellVideoObj, 'toggle', 'expanded');
        //   html.classList.toggle('video-expanded');
        // });

        contractIcon.addEventListener('click', () => {
          updateClass(cellVideoObj, 'toggle', 'expanded');
          html.classList.toggle('video-expanded');
        });

        const togglePlayingClass = () => {
          console.log(videoElement);
          if (videoElement.playing) {
            videoElement.pause();
            updateClass(cellVideoObj, 'remove', 'playing');
          } else {
            videoElement.play();
            updateClass(cellVideoObj, 'add', 'playing');
          }
        };

        videoElement.addEventListener('click', togglePlayingClass);

        // ESC Key 
        document.onkeydown = function (evt) {
          evt = evt || window.event;
          if ('Escape' === evt.key || 'Esc' === evt.key) {
            updateClass(cellVideoObj, 'remove', 'expanded');
            updateClass(cellVideoObj, 'remove', 'playing');
            html.classList.remove('video-expanded');
            videoElement.pause();
          }
        };
      }
    });
  }
};