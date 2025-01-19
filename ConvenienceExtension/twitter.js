// Autoredirect to xcancel.com
const currentUrl = window.location.href;
const newUrl = currentUrl.replace(/:\/\/[^/]+/, '://xcancel.com');
window.location.href = newUrl;;