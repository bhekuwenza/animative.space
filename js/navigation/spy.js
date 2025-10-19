/**
 * Nav Spy
 * sync inpage navigation with corresponding section.
 * apply active classes to nav items
 */

const navSpy = () => {

  let
    options = {
      sectionClass: '.cell.section',
      menuActiveTarget: 'a[href^="#"]',
      offset: 200,
      hrefAttribute: 'href',
      activeClass: 'active',
      scrollContainer: window,
      smoothScroll: {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      },
    },
    menu = '.has-nav-spy',
    menuList = menu instanceof HTMLElement ? menu : document.querySelector(menu),
    scroller = window,
    sections = document.querySelectorAll(options.sectionClass);

  const onClick = (event) => {
    const targetSelector = event.target.getAttribute(options.hrefAttribute)
    const targetElement = document.querySelector(targetSelector)

    if (targetElement && options.smoothScroll) {
      // prevent click event
      // event.preventDefault()
      // handle smooth scrolling to 'targetElement'
      // scrollTo(targetElement)
    }
  }

  const onScroll = () => {
    const section = getSectionInView();
    const menuItem = getMenuItemBySection(section);

    if (menuItem) {
      removeCurrentActive({ ignore: menuItem });
      setActive(menuItem);
    }
  }

  const scrollTo = (targetElement) => {
    targetElement.scrollIntoView({
      ...options.smoothScroll,
    })
  }

  const getMenuItemBySection = (section) => {
    if (!section) return
    const sectionId = section.getAttribute('id');
    return menuList.querySelector(`[${options.hrefAttribute}="#${sectionId}"]`);
  }

  const getSectionInView = () => {
    for (let i = 0, length = sections.length; i < length; i++) {
      const startAt = sections[i].offsetTop;
      const endAt = startAt + sections[i].offsetHeight;
      let currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + options.offset

      const isInView = currentPosition > startAt && currentPosition <= endAt
      if (isInView) return sections[i]
    }
  }

  const setActive = (activeItem) => {
    const isActive = activeItem.classList.contains(options.activeClass)
    if (!isActive) {
      activeItem.classList.add(options.activeClass);
      activeItem.setAttribute('aria-current', 'current');
    }
  }

  const removeCurrentActive = ({ ignore }) => {
    const { hrefAttribute, menuActiveTarget, activeClass } = options
    const items = `${menuActiveTarget}.${activeClass}:not([${hrefAttribute}="${ignore.getAttribute(hrefAttribute)}"])`
    const menuItems = menuList.querySelectorAll(items)

    menuItems.forEach((item) => {
      item.classList.remove(options.activeClass);
      item.setAttribute('aria-current', 'false');
    });
  }

  const attachEventListeners = () => {
    const element = document.querySelector(menu);
    if (scroller && element) {
      scroller.addEventListener('scroll', () => onScroll())

      // smooth scroll
      if (options.smoothScroll) {
        const menuItems = menuList.querySelectorAll(options.menuActiveTarget)
        menuItems.forEach((item) => item.addEventListener('click', onClick.bind(this)))
      }
    }
  }; attachEventListeners()

}

export { navSpy };