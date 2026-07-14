function toggleDetails(name) {
  const homePath = {
    '/': `/details/${name}`,
    [`/details/${name}`]: '/', // template literal as a key requires brackets! 
  }
  const pageUrl = window.location.pathname;
  window.location.href = homePath[pageUrl] || '/';
}
export { toggleDetails };
