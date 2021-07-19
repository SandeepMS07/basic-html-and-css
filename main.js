let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImg = document.querySelector('img');

myImg.onclick = function() {
     let mySrc = myImg.getAttribute('src');
     if(mySrc == 'to-do-list-apps-1400x1050.png') {
         myImg.setAttribute('src','google.png');
     }else {
         myImg.setAttribute('src','to-do-list-apps-1400x1050.png');
     }
}

function setUserName(){
    let myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool,  ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,  ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}