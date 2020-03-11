
(function () {
  let stylesheets;
  const button = document.querySelector('#styles-toggle');
  button.addEventListener('click', () => {
    if (!stylesheets) {
      stylesheets = document.querySelectorAll('head > link[rel="stylesheet"]');
      for (let i = 0; i < stylesheets.length; i++) {
        removeElement(stylesheets[i]);
      }
    }
    else {
      const head = document.querySelector('head');
      for (let i = 0; i < stylesheets.length; i++) {
        head.appendChild(stylesheets[i]);
      }
      stylesheets = undefined;
    }
  });

  function removeElement(el) {
    el.parentNode.removeChild(el);
  }
})();