/**
 * Nav Portal
 * Navigation mutation to handle overflowing menu items on main nav;
 */
const navPortal = (el) => {
  const PARENT = document.getElementById(el);

  if (!PARENT) return;

  const KIDS = PARENT.children;

  let cache = null;

  const init = () => {
    KIDS
    let KIDSCombinedWidth = 0;
    let PARENTActualWidth = PARENT.offsetWidth;

    for (let i = 0, length = KIDS.length; i < length; i++) {
      const KID = KIDS[i];
      const KIDWIDTH = KID.offsetWidth
      KIDSCombinedWidth += KIDWIDTH;
      // console.log(KID.offsetLeft);
      if (KID.offsetLeft + (KIDWIDTH / 2) > PARENTActualWidth) {
        KID.classList.add('invisible');
      } else {
        KID.classList.remove('invisible');
      }
    }

    // console.log(KIDS);
    // console.log(KIDSCombinedWidth);
    // console.log(PARENTActualWidth);
  };

  window.onresize = () => {
    window.requestAnimationFrame(() => {
      cache = null
      cache = init();
    });
  };
}
export { navPortal };