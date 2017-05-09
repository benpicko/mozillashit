var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mozilla-firefox.png') {
    myImage.setAttribute('src', 'images/aa5e4548975eb164dd04de4591683ba4.png');
  } else {
    myImage.setAttribute('src', 'images/mozilla-firefox.png');
  }
};
