document.addEventListener('DOMContentLoaded', function() {
    var injected = document.querySelector('.injected');
    if (injected) {
      injected.parentNode.removeChild(injected);
    }
  });