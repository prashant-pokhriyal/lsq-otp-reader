MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
const observer = new MutationObserver(function (mutations, observer) {
  // fired when a mutation occurs
  chrome.storage.sync.get('phone', function (data) {
    const phoneInputElem = document.getElementsByClassName('number-input')[0];
    if (phoneInputElem) {
      phoneInputElem.value = data.phone;
    }
  });
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document.getElementsByClassName('login-form-body')[0], {
  subtree: true,
  attributes: false,
  childList: true,
  characterData: false,
  //...
});