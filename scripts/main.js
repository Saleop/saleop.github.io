var mascot       =      document.querySelector('img');
var myHtml       =      document.querySelector('html');
var myBody       =      document.querySelector('body');
var myHeader     =      document.querySelector('h1');
var myMessage    =      document.querySelector('p.greeting');
var myButton     =      document.querySelector('button');
var myTitle      =      document.querySelector('title');

function isNameDefined() {
    return localStorage.getItem('name');
}

function setJackMessage() {
    if (isNameDefined()) {
        myHeader.textContent = "Hee Hell-ho, " + localStorage.getItem('name') + "!";
    }
    else {
        myHeader.textContent = "Hee Hell-ho!";
    }
}

function setTeddyMessage() {
    if (isNameDefined()) {
        myHeader.textContent = "Hello, " + localStorage.getItem('name') + "! My name's Teddy!";
    }
    else {
        myHeader.textContent = "Hello! My name's Teddy!";
    }
}

function changeToJack() {
    mascot.setAttribute('src', 'images/jackfrost.png');
    myHtml.setAttribute('class', 'jack');
    myBody.setAttribute('class', 'jack');
    myMessage.textContent = "Welcome to my website, ho!";
    myTitle.textContent = "Hee ho!";
    setJackMessage();
}

function changeToTeddy() {
    mascot.setAttribute('src', 'images/teddy.png');
    myHtml.setAttribute('class', 'teddy');
    myBody.setAttribute('class', 'teddy');
    myMessage.textContent = "It's bear-y nice to meet you!";
    myTitle.textContent = "Bear-sona!";
    setTeddyMessage();
}

myButton.onclick = function () {
    var storedName = prompt('Please enter your name.');
    localStorage.setItem('name', storedName);
    if (mascot.getAttribute('src') === 'images/jackfrost.png') {
        setJackMessage();
    }
    else
    {
        setTeddyMessage();
    }
}

mascot.onclick = function () {
    if (mascot.getAttribute('src') === 'images/jackfrost.png') {
        changeToTeddy();
    }
    else
    {
        changeToJack();
    }
}
