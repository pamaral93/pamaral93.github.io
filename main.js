let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/t-rex-old.jpg') {
    myImage.setAttribute ('src','images/t-rex.jpg');
  } else {
    myImage.setAttribute ('src','images/t-rex-old.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'T-rex is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'T-rex is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}