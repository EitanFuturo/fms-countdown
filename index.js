window.onload = () => {
  const clock = document.getElementById('clock')
}

const countdown = (bpm=90, numberOfPatterns=6) => {
    let numberOfBeats = numberOfPatterns * 16
    let seconds = (numberOfBeats * 60) / bpm
   
    showCountdown(seconds)
}

const showCountdown = (seconds) => {
    clock.innerHTML = seconds
    seconds --

    if (seconds >= 0) {
        setTimeout( () => showCountdown(seconds), 1000)
    }
}

const playCountdown = () => {
  let bpm = parseInt(document.getElementById('input-bpm').value)
  let patterns = parseInt(document.getElementById('input-patterns').value)

  countdown(bpm, patterns)
}
