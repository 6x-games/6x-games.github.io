// Load the Google Analytics gtag.js script
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M97CMQ0H59';
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', 'G-M97CMQ0H59');
})();
