/**
 * Toggle an attribute's value
 *
 * @param {Element} el - The element.
 * @param {boolean} withListeners - Whether we want to add/remove listeners or not.
 * @since 1.0.0
 */

export const toggleAriaExpandedText = 'span.menuitem';
export const toggleAriaExpandedButton = '[aria-expanded]';


export const hasClass = (element, className) => {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

export const toggleExpanded = (element, withListeners) => {
  // get sub nav parent (listitem) if any.
  const PARENT = hasClass(element.parentElement, 'listitem')
    ? element.parentElement
    : null;

  if ('true' !== element.getAttribute('aria-expanded')) {
    // set button to expanded mode
    element.setAttribute('aria-expanded', 'true');

    // if sub nav parent found add parent class
    // then adjust position of the sub nav as it opens
    if (PARENT) {
      PARENT.classList.add('active');

      // adjust position of sub nav
      navSubPosition(PARENT);

      // add helper to close sub nav when user taps away
      if (withListeners) {
        document.addEventListener('click', clearExpandedOnClickOutside(element, PARENT));
      }
    }
  } else {
    // set button to none expanded mode
    element.setAttribute('aria-expanded', 'false');

    if (PARENT) {
      PARENT.classList.remove('active');

      // remove helper to close sub nav when user taps away
      if (withListeners) {
        document.removeEventListener('click', clearExpandedOnClickOutside(element, PARENT));
      }
    }
  }
}

export const clearExpandedOnClickOutside = (element, parentElement) => {
  // return with event passed on from click
  return (el) => {
    if (!parentElement.contains(el.target)) {
      parentElement.classList.remove('active');

      // set button to none expanded mode
      element.setAttribute('aria-expanded', 'false');
    }
  }
}

// clear all expanded menu
export const clearExpanded = (ignore = null) => {
  document.querySelectorAll(toggleAriaExpandedButton).forEach(function (button) {
    if (button !== ignore) {
      const PARENT = button.parentElement;
      if (PARENT) PARENT.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Changes the position of submenus so they always fit the screen horizontally.
 *
 * @param {Element} li - The li element.
 */
export const navSubPosition = (li) => {
  var subMenu = li.querySelector('ul.sub-menu'),
    rect,
    right,
    left,
    windowWidth;

  if (!subMenu) {
    return;
  }

  rect = subMenu.getBoundingClientRect();
  right = Math.round(rect.right);
  left = Math.round(rect.left);
  windowWidth = Math.round(window.innerWidth);

  if (right > windowWidth) {
    subMenu.classList.add('submenu-reposition-right');
  } else if (document.body.classList.contains('rtl') && left < 0) {
    subMenu.classList.add('submenu-reposition-left');
  }
}

/**
 * Handle clicks on all [id*="toggle-menu-"]
 *
 * @param {Element} el - The button.
 */

const navToggles = () => {
  const NAV = document.getElementsByTagName('nav');
  const NAVARRAY = Array.from(NAV);

  // expanded click event handler
  let expandedHandler = () => {
    return (e) => {
      if (e.target.matches(toggleAriaExpandedButton)) {
        toggleExpanded(e.target, true);
      }
      if (e.target.matches(toggleAriaExpandedText)) {

        const nextEl = e.target.nextElementSibling;
        const prevEl = e.target.previousElementSibling;

        let adjacentBtn = (nextEl && nextEl.hasAttribute('aria-expanded'))
          ? nextEl
          : (prevEl && prevEl.hasAttribute('aria-expanded'))
            ? prevEl
            : null;

        if (adjacentBtn) {
          toggleExpanded(adjacentBtn, true);
        }
      }
    }
  }

  for (let i = 0, length = NAVARRAY.length; i < length; i++) {
    const element = NAVARRAY[i];
    element.addEventListener(
      'click',
      expandedHandler()
    );
  }

  // ESC Key 
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if ('Escape' === evt.key || 'Esc' === evt.key) {
      clearExpanded();
    }
  };
}

export { navToggles }