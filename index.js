let clock, startButton, seconds
let newClockTriggered = true
let bpmDefault = 90
let numberOfPatternsDefault = 6

window.onload = () => {
  initializeVariables()
}


const setCountdown = (bpm=bpmDefault, numberOfPatterns=numberOfPatternsDefault) => {
    if (isNaN(bpm)) {
      bpm = bpmDefault
    }

    if (isNaN(numberOfPatterns)) {
      numberOfPatterns = numberOfPatternsDefault
    }

    let numberOfBeats = numberOfPatterns * 16
    let seconds = setSeconds(numberOfBeats, bpm)
    showCountdown(seconds)
}

const showCountdown = (seconds) => {
    if (newClockTriggered) {
      return
    }

    clock.innerHTML = seconds
    seconds --

    if (seconds > 0) {
      setTimeout( () => showCountdown(seconds), 1000)
    } else {
      setTimeout( () => {
        clock.innerHTML = seconds
        newClockTriggered = true
        changeButtonText()
      }, 1000)
    }
}

const playCountdown = () => {
  let bpm = parseInt(document.getElementById('input-bpm').value)
  let patterns = parseInt(document.getElementById('input-patterns').value)

  newClockTriggered = !newClockTriggered
  changeButtonText()
  setCountdown(bpm, patterns)
}

const setSeconds = (numberOfBeats, bpm) => {
  return Math.floor((numberOfBeats * 60) / bpm)
}

const initializeVariables = () => {
  clock = document.getElementById('clock')
  startButton = document.getElementById('start-button')
}

const changeButtonText = () => {
  switch(startButton.innerHTML) {
    case 'Iniciar':  
      startButton.innerHTML = 'Parar'
      break
    case 'Reiniciar':  
      startButton.innerHTML = 'Parar'
      break
    case 'Parar':
      startButton.innerHTML = 'Reiniciar'
  }
}
