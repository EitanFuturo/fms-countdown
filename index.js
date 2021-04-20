let clock, startButton

window.onload = () => {
  initializeConstants()
}

let newClockTriggered = true;

const countdown = (bpm=90, numberOfPatterns=6) => {
    let numberOfBeats = numberOfPatterns * 16

    let seconds = (numberOfBeats * 60) / bpm
   
    showCountdown(seconds)
}

const showCountdown = (seconds) => {
    if (newClockTriggered) {
      return
    }

    clock.innerHTML = seconds
    seconds --

    if (seconds >= 0) {
      setTimeout( () => showCountdown(seconds), 1000)
    }
}

const playCountdown = () => {
  let bpm = parseInt(document.getElementById('input-bpm').value)
  let patterns = parseInt(document.getElementById('input-patterns').value)
  
  newClockTriggered = !newClockTriggered

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
  countdown(bpm, patterns)
}

const initializeConstants = () => {
  clock = document.getElementById('clock')
  startButton = document.getElementById('start-button')
  console.log(clock, startButton)
}
