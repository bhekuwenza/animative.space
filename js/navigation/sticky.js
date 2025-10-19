/**
 * 
 */

const toggleButtonState = (event) => {
  let button = event.target;
  let currentState = button.getAttribute('aria-pressed');

  // Set the new aria-pressed state on the button
  // If aria-pressed is set to true, set newState to false
  button.setAttribute(
    'aria-pressed',
    (currentState === 'true') ? 'false' : 'true'
  );
  if (button.getAttribute('aria-expanded'))
    button.setAttribute(
      'aria-expanded',
      (currentState === 'true') ? 'false' : 'true'
    );
}

const toggleButtonEventHandler = (event) => {
  var type = event.type;

  // Grab the keydown and click events
  if (type === 'keydown') {
    // If either enter or space is pressed, execute the funtion
    if (event.keyCode === 13 || event.keyCode === 32) {
      toggleButtonState(event);

      event.preventDefault();
    }
  } else if (type === 'click') {
    toggleButtonState(event);
  }
}

const navSticky = () => {
  const isSticky = document.getElementsByClassName('has-sticky-nav')[0];
  const header = document.getElementsByClassName('site-header')[0];

  if (!isSticky || !header) {
    return;
  } else {
    const html = document.documentElement;

    //
    const btnToggleNav = header.querySelector('#toggle-menu-one');

    btnToggleNav.addEventListener('click', toggleButtonEventHandler);
    btnToggleNav.addEventListener('keydown', toggleButtonEventHandler);
  }
}

export { navSticky };