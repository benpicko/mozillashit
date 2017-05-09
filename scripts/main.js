var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mozilla-firefox.png') {
    myImage.setAttribute('src', 'images/aa5e4548975eb164dd04de4591683ba4.png');
  } else {
    myImage.setAttribute('src', 'images/mozilla-firefox.png');
  }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool,' + myName;
};

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function () {
  setUserName();
};
