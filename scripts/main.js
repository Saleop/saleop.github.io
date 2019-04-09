var mascot       =      document.querySelector('img');
var myHtml       =      document.querySelector('html');
var myBody       =      document.querySelector('body');
var myHeader     =      document.querySelector('h1');
var myMessage    =      document.querySelector('p.greeting');
var myButton     =      document.querySelector('button');
var myTitle      =      document.querySelector('title');

mascot.onclick = function() {
    var mySrc = mascot.getAttribute('src');
    if(mySrc === 'images/jackfrost.png') {
        mascot.setAttribute('src', 'images/teddy.png');
        myHtml.setAttribute('class', 'teddy');
        myBody.setAttribute('class', 'teddy');
        nameCheck();
        myMessage.textContent = "It's bear-y nice to meet you!";
        myTitle.textContent = "Hey, baby~"
    }
    else {
        mascot.setAttribute('src', 'images/jackfrost.png');
        mascot.setAttribute('alt', 'The true mascot of Atlus');
        myHtml.setAttribute('class', 'jack');
        myBody.setAttribute('class', 'jack');
        nameCheck();
        myMessage.textContent = "Welcome to my website, ho!";
        myTitle.textContent = "Hee Ho!";
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    if (mascot.getAttribute('src') === 'images/jackfrost.png') {
        myHeader.textContent = 'Hee Hell-ho, ' + myName + '!';
    }
    else {
        myHeader.textContent = 'Hello, ' + myName + "! My name's Teddy!";j
    }
}

function nameCheck () {
        if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        if (mascot.getAttribute('src') === 'images/jackfrost.png') {
            myHeader.textContent = 'Hee Hell-ho, ' + storedName + '!';
        }
        else {
            myHeader.textContent = 'Hello, ' + storedName + "! My name's Teddy!";j
        }
    }
}

nameCheck();

myButton.onclick = function() {
  setUserName();
}