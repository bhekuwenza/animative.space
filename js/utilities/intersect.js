export const readyIntersect = () => {
  /**
   * Helper Functions
   */

  const preload = (src) =>
    new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });

  /**
   * Options + Function
   */

  const options = {
    root: null,
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const lazyInit = (element, fn) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        observer.disconnect();
        fn();
      }
    }, options);
    observer.observe(element);
  };

  // Observe: Slideshow

  const galleries = document.querySelectorAll('[class*="gallery-"]');

  [...galleries].forEach((gallery) => {
    // target.addEventListener('click', () => {
    //   console.log("spread forEach worked");
    // });
    // io.observe(target);
  });
};