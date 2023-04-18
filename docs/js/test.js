document.addEventListener('DOMContentLoaded', function() {
    var injected = document.querySelector('.injected');
    console.log(injected)
    if (injected) {
      injected.parentNode.removeChild(injected);
    }
  });