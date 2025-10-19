// Nav Sticky
import { navSticky } from './navigation/sticky.js'; navSticky();
import { navToggles } from './navigation/toggles.js'; navToggles();
// import { navSpy } from './navigation/spy.js'; navSpy();
// import { navPortal } from './navigation/portal.js'; navPortal('menu-one');


import { readyVideos } from './blocks/media-audio-video.js'; document.addEventListener('DOMContentLoaded', readyVideos);
import { readyImages } from './blocks/media-image.js'; document.addEventListener('DOMContentLoaded', readyImages);
import { readyShow } from './blocks/show.js'; document.addEventListener('DOMContentLoaded', readyShow);
import { readyIntersect } from './utilities/intersect.js'; document.addEventListener('DOMContentLoaded', readyIntersect);

/**
 * Search Site
 */

import './navigation/search.js';

/**
 * Header
 */
// import { readyHeader } from './header.js'; readyHeader();

async function isReady () {
  // console.log('dom-loaded at: ' + currentTime());
  await document.fonts.ready;
  // console.log('font-loaded at: ' + currentTime());
  document.documentElement.classList.add('loaded');

}

document.addEventListener("DOMContentLoaded", isReady);