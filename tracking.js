/* Only fixed labels are sent to the data layer. Do not include form data or URLs. */
(() => {
  const page = location.pathname.endsWith('training.html') ? 'training'
    : location.pathname.endsWith('back.html') ? 'back'
    : location.pathname.endsWith('shoulder.html') ? 'shoulder' : 'general';

  document.addEventListener('click', (event) => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!anchor) return;
    let destination;
    try { destination = new URL(anchor.href, location.href); } catch { return; }
    let name;
    if (destination.hostname === 'appointment-system.net' && destination.pathname === '/book') {
      name = 'booking_click';
    } else if (destination.hostname === 'lin.ee' && destination.pathname === '/pum599o') {
      name = 'line_click';
    } else return;
    const area = anchor.closest('.mobile-booking') ? 'mobile_fixed'
      : anchor.closest('.desktop-right') ? 'desktop_sidebar'
      : anchor.closest('header') ? 'header'
      : anchor.closest('.hero') ? 'hero'
      : anchor.closest('.cta') ? 'cta' : 'other';
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, lp_type: page, link_area: area });
  });
})();
