import { elements } from "./elements.js"

const {
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
} = elements

let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)
let timerControl

btnPlay.addEventListener('click', coutDown)

btnAnyLess.addEventListener('click', decrementerMinutes)

btnMost.addEventListener('click',  updateMinutes)

cardMarket.addEventListener('click', clickMarket)

soundOn.addEventListener('click', controlSounds)

cardCloud.addEventListener('click', clickCloud)

cardTree.addEventListener('click', clickTree)

cardFire.addEventListener('click', clickFire)


function controlSounds() {
    soundOn.classList.add('hide')
    soundOff.classList.remove('hide')
    cardTree.classList.remove('tree')
    cardTree.classList.remove('path')
    cardCloud.classList.remove('cloud')
    cardCloud.classList.remove('path')
    cardMarket.classList.remove('market')
    cardMarket.classList.remove('path')
    cardFire.classList.remove('fire')
    cardFire.classList.remove('path')
    soundMarket.pause()
    soundCloud.pause()
    soundFire.pause()
    soundForest.pause()

}

function updateMinutes() {
    minutes += 5
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
}

function decrementerMinutes() {
   minutes -= 5
   minutesDisplay.textContent = String(minutes).padStart(2, '0')

   if(minutes <= 0){
        btnAnyLess.removeEventListener('click', decrementerMinutes)
   }
  
}

function coutDown() {
    timerControl = setTimeout(() => {
           let seconds = Number(secondsDisplay.textContent)
           let minutes = Number(minutesDisplay.textContent)
   
           if(minutes <= 0 && seconds <= 0) {
               return
           }
   
           if(seconds <= 0) {
               seconds = 60
               minutesDisplay.textContent = String(minutes - 1).padStart(2, '0') 
           }
   
           secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
           
           coutDown()
       }, 1000);
}


btnPause.addEventListener('click', () => {
    clearTimeout(timerControl)
})


function clickTree() {
    cardTree.classList.add('tree')
    cardTree.classList.add('path')
    cardCloud.classList.remove('cloud')
    cardCloud.classList.remove('path')
    cardMarket.classList.remove('market')
    cardMarket.classList.remove('path')
    cardFire.classList.remove('fire')
    cardFire.classList.remove('path')
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    soundForest.play()
    soundMarket.pause()
    soundCloud.pause()
    soundFire.pause()
}

function clickCloud() {
    cardCloud.classList.add('cloud')
    cardCloud.classList.add('path')
    cardTree.classList.remove('tree')
    cardTree.classList.remove('path')
    cardMarket.classList.remove('market')
    cardMarket.classList.remove('path')
    cardFire.classList.remove('fire')
    cardFire.classList.remove('path')
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    soundCloud.play()
    soundForest.pause()
    soundMarket.pause()
    soundFire.pause()
}

function clickMarket() {
    cardMarket.classList.add('market')
    cardMarket.classList.add('path')
    cardTree.classList.remove('tree')
    cardTree.classList.remove('path')
    cardCloud.classList.remove('cloud')
    cardCloud.classList.remove('path')
    cardFire.classList.remove('fire')
    cardFire.classList.remove('path')
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    soundMarket.play()
    soundForest.pause()
    soundCloud.pause()
    soundFire.pause()
    
}

function clickFire() {
    cardFire.classList.add('fire')
    cardFire.classList.add('path')
    cardTree.classList.remove('tree')
    cardTree.classList.remove('path')
    cardCloud.classList.remove('cloud')
    cardCloud.classList.remove('path')
    cardMarket.classList.remove('market')
    cardMarket.classList.remove('path')
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    soundFire.play()
    soundCloud.pause()
    soundForest.pause()
    soundMarket.pause()
}