import * as controlFunctions from "./classListsControl.js"
import { controlVolume } from "./controlVolume.js"
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
    rangeControl,
    inputTree,
    inputCloud,
    inputMarket,
    inputFire

} = elements

const {
    changeCloud,
    changeFire,
    changeMarket,
    changeTree

} = controlVolume

let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)
let timerControl

btnPause.addEventListener('click', () => clearTimeout(timerControl))

btnAnyLess.addEventListener('click', decrementerMinutes)

btnMost.addEventListener('click',  updateMinutes)

btnPlay.addEventListener('click', coutDown)

cardMarket.addEventListener('click', controlFunctions.clickMarket)

cardCloud.addEventListener('click', controlFunctions.clickCloud)

cardTree.addEventListener('click', controlFunctions.clickTree)

cardFire.addEventListener('click', controlFunctions.clickFire)

inputTree.addEventListener('change', changeTree) 

inputFire.addEventListener('change', changeFire)

inputCloud.addEventListener('change', changeCloud)

inputMarket.addEventListener('change', changeMarket)


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

