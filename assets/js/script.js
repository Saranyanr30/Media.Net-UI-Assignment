var modal, isFirefox, isSafari, isIE, isEdge, isChrome, modalText;
modal = document.getElementById("modal");
function displayPopup() {
    modal.style.display = "flex";
    setTimeout(function () { modal.style.display = "none"; }, 3000);
}
function closeModal() {
    modal.style.display = "none";
}



isFirefox = typeof InstallTrigger !== 'undefined';
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
isIE = /*@cc_on!@*/false || !!document.documentMode;
isEdge = !isIE && !!window.StyleMedia;
isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
modalText = document.getElementById("modal-message");
if (!(isChrome || isEdge || isSafari || isFirefox)) {
    modalText.innerHTML = "Browser Not Supported.";
}