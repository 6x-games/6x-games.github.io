// Load the gtag.js script asynchronously
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M97CMQ0H59';
  document.head.appendChild(script);
})();

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-M97CMQ0H59');
