// Observe: <Figure>

const preload = (src) =>
  new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });

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

const initImages = (images) => {
  [...images].forEach((figure) => {
    if (!figure.querySelector('img')) return;

    lazyInit(figure, () => {
      const image = figure.querySelector('img');
      const src = image.getAttribute('data-src');
      const srcset = image.getAttribute('data-srcset');

      preload(src)
        .then((obj) => {
          image.src = obj.src;
          image.srcset = srcset;
          setTimeout(() => { figure.classList.add('loaded') }, 500);
        })
        .catch((err) => {
          console.error('Failed', err);
          image.src = '/broken-img.svg';
          image.classList.add('broken-img');
        });
    });
  });
}

export const readyImages = () => {
  const imageCell = document.getElementsByClassName(
    'cell image'
  );

  if (imageCell.length > 0) {
    initImages(imageCell);
  }
}