import { elements } from "./elements.js"

const soundForest = new Audio ("./assets/sounds/Floresta.wav")
const soundCloud = new Audio ("./assets/sounds/Chuva.wav")
const soundMarket = new Audio ("./assets/sounds/Cafeteria.wav")
const soundFire = new Audio ("./assets/sounds/Lareira.wav")

const {
    cardMarket,
    cardCloud,
    cardTree,
    cardFire,
    inputCloud,
    inputTree,
    inputFire,
    inputMarket,
    rangeControl,
    dark,
    body,
    treeDark,
    svgPlay,
    svgPause,
    svgMost,
    svgAnyLess,
    svgDark,
    cloudDark,
    marketDark,
    fireDark,
    svgTree,
    svgCloud,
    svgMarket,
    svgFire,
    rangeControlTree,
    rangeControlCloud,
    rangeControlMarket,
    rangeControlFire
} = elements

dark.addEventListener('click', darkMode)


function darkMode() {
    body.classList.toggle('background-dark')
    treeDark.classList.toggle('darkButton')
    cloudDark.classList.toggle('darkButton')
    marketDark.classList.toggle('darkButton')
    fireDark.classList.toggle('darkButton')
    svgDark.classList.toggle('fillColor')
    svgPlay.classList.toggle('fillColor')
    svgPause.classList.toggle('fillColor')
    svgMost.classList.toggle('fillColor')
    svgAnyLess.classList.toggle('fillColor')
    svgTree.classList.toggle('fillColor')
    svgCloud.classList.toggle('fillColor')
    svgMarket.classList.toggle('fillColor')
    svgFire.classList.toggle('fillColor')
    inputTree.classList.toggle('backgroundRangeControlWhite')
    inputCloud.classList.toggle('backgroundRangeControlWhite')
    inputFire.classList.toggle('backgroundRangeControlWhite')
    inputMarket.classList.toggle('backgroundRangeControlWhite')
    rangeControlTree.classList.toggle('backgroundRangeControl')
    rangeControlCloud.classList.toggle('backgroundRangeControl')
    rangeControlMarket.classList.toggle('backgroundRangeControl')
    rangeControlFire.classList.toggle('backgroundRangeControl')
}

    
function clickTree() {
    cardTree.classList.add('tree')
    cardTree.classList.add('path')
    cardCloud.classList.remove('cloud')
    cardCloud.classList.remove('path')
    cardMarket.classList.remove('market')
    cardMarket.classList.remove('path')
    cardFire.classList.remove('fire')
    cardFire.classList.remove('path')

    inputTree.classList.add('rangeControl-tree')
    inputCloud.classList.remove('rangeControl-cloud')
    inputFire.classList.remove('rangeControl-Fire')
    inputMarket.classList.remove('rangeControl-Market')

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

    inputCloud.classList.add('rangeControl-cloud')
    inputTree.classList.remove('rangeControl-tree')
    inputFire.classList.remove('rangeControl-fire')
    inputMarket.classList.remove('rangeControl-market')

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

    inputMarket.classList.add('rangeControl-market')
    inputTree.classList.remove('rangeControl-tree')
    inputFire.classList.remove('rangeControl-Fire')
    inputCloud.classList.remove('rangeControl-cloud')

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

    inputFire.classList.add('rangeControl-fire')
    inputTree.classList.remove('rangeControl-tree')
    inputFire.classList.remove('rangeControl-Fire')
    inputCloud.classList.remove('rangeControl-cloud')
    inputMarket.classList.remove('rangeControl-market')

    soundFire.play()
    soundCloud.pause()
    soundForest.pause()
    soundMarket.pause()
}    

export { 
    clickCloud, 
    clickFire, 
    clickTree, 
    clickMarket, 
    soundForest,
    soundCloud,
    soundMarket,
    soundFire
}