function toggleDetails() {
  const homePath = {
    '/': '/details',
    '/details': '/',
  }
  const pageUrl = window.location.pathname;
  window.location.href = homePath[pageUrl] || '/';
}
export { toggleDetails };
