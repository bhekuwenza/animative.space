// test Passive
let passiveSupported = false;

try {
  const options = {
    get passive () { // This function will be called when the browser
      //   attempts to access the passive property.
      passiveSupported = true;
      return false;
    }
  };

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch (err) {
  passiveSupported = false;
}


const readyHeader = () => {
  // Elements
  const root = document.querySelector(':root');
  const html = document.documentElement;

  const header = document.getElementsByClassName('site-header')[0];

  const btnMenuItem = header.querySelectorAll('.menuitem');

  let lastScrollY = 0;
  let scheduledAnimationFrameScroll;
  let scheduledAnimationFrameResize;

  const toggleNavChild = (evt) => {
    if (evt.target && evt.target.classList.contains('btn-nav-toggle')) {
      btnMenuItemActive.classList.remove('active');
      html.classList.remove('nav-active');
      evt.target.classList.remove('active');
    } else if (evt.target) {
      evt.target.classList.toggle('active');
      html.classList.toggle('nav-active');
    }
  };

  [...btnMenuItem].forEach((el) => {
    const isParent = el.nextElementSibling ? true : false;
    if (isParent && el.nextElementSibling.tagName === 'UL') {
      el.addEventListener('click', toggleNavChild);
      el.parentElement.classList.add('parent');
      console.log(el.nextElementSibling.tagName);
    } else {
    }
  });

  function readResizeAndUpdatePage () {
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;

    root.style.setProperty('--window-width', wWidth / 100 + 'px');
    root.style.setProperty('--window-height', wHeight / 100 + 'px');

    const hHeight = header.clientHeight;

    root.style.setProperty('--header-height', hHeight + 'px');

    scheduledAnimationFrameResize = false;
  };

  window.addEventListener(
    'resize',
    (evt) => {
      // Prevent multiple rAF callbacks.
      if (scheduledAnimationFrameResize) return;

      scheduledAnimationFrameResize = true;
      requestAnimationFrame(readResizeAndUpdatePage);
    },
    passiveSupported
      ? { passive: true } : false
  );

  readResizeAndUpdatePage();

  function readScrollAndUpdatePage () {
    //
    if (lastScrollY > 50 && !html.classList.contains('end')) {
      if (!html.classList.contains('is-scrolling'))
        html.classList.add('is-scrolling');
    } else {
      if (html.classList.contains('is-scrolling'))
        html.classList.remove('is-scrolling');
    }
    // 
    if (lastScrollY > 750) {
      if (!html.classList.contains('far')) html.classList.add('far');
    } else {
      if (html.classList.contains('far')) html.classList.remove('far');
    }

    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 200
    ) {
      if (!html.classList.contains('end')) html.classList.add('end');
    } else {
      if (html.classList.contains('end')) html.classList.remove('end');
    }
    //
    scheduledAnimationFrameScroll = false;
  }

  window.addEventListener(
    'scroll',
    (evt) => {
      lastScrollY = window.scrollY;

      // Prevent multiple rAF callbacks.
      if (scheduledAnimationFrameScroll) return;

      scheduledAnimationFrameScroll = true;
      requestAnimationFrame(readScrollAndUpdatePage);
    },
    passiveSupported
      ? { passive: true } : false
  );

  readScrollAndUpdatePage()
};

export { readyHeader };