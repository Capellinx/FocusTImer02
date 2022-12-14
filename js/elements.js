const cardMarket = document.querySelector('#market')
const cardCloud = document.querySelector('#cloud')
const cardTree = document.querySelector('#tree')
const cardFire = document.querySelector('#fire')
const btnMost = document.querySelector('#most')
const btnAnyLess = document.querySelector('#any-less')
const btnPlay = document.querySelector('#play')
const btnPause = document.querySelector('#pause')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const soundForest = new Audio ("./assets/sounds/Floresta.wav")
const soundCloud = new Audio ("./assets/sounds/Chuva.wav")
const soundMarket = new Audio ("./assets/sounds/Cafeteria.wav")
const soundFire = new Audio ("./assets/sounds/Lareira.wav")
const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')

export const elements = {
    cardMarket,
    cardCloud,
    cardTree,
    cardFire,
    btnMost,
    btnAnyLess,
    btnPlay,
    btnPause,
    minutesDisplay,
    secondsDisplay,
    soundForest,
    soundCloud,
    soundMarket,
    soundFire,
    soundOn,
    soundOff
}