import * as controlFunctions from "./classListsControl.js"
import { elements } from "./elements.js"

const {
    rangeControl,
    inputTree,
    inputCloud,
    inputMarket,
    inputFire

} = elements

let audioForrest = document.createElement('audio')
let audioCloud = document.createElement('audio')
let audioFire = document.createElement('audio')
let audioMarket = document.createElement('audio')

function changeTree() {
    audioForrest = controlFunctions.soundForest
    controlFunctions.soundForest.volume = inputTree.value
}

function changeCloud() {
    audioCloud = controlFunctions.soundCloud
    controlFunctions.soundCloud.volume = inputCloud.value
}

function changeFire() {
    audioFire = controlFunctions.soundFire
    controlFunctions.soundFire.volume = inputFire.value
}

function changeMarket() {
    audioMarket = controlFunctions.soundMarket
    controlFunctions.soundForest.volume = inputMarket.value
}


export const controlVolume = { 
    changeCloud, 
    changeFire, 
    changeMarket, 
    changeTree 
}