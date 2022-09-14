const container = document.querySelector('.container')
const modal = document.querySelector('.modal')

const reset = document.querySelector('#reset')
const btnTry = document.querySelector('#tryBtn')
const random = Math.round(Math.random() * 10)

let xAttempts = 1

btnTry.addEventListener('click', btn)
reset.addEventListener('click', resetGame)

function btn(e) {
  e.preventDefault()

  const number = document.querySelector('#inputNumber')

  if (Number(number.value) == random) {
    toggleDisplay()

    modal.querySelector(
      'h2'
    ).innerText = `Parabéns, você acertou em ${xAttempts} tentativas.`
  }
  number.value = ''
  xAttempts++
}

function toggleDisplay() {
  container.classList.toggle('hide')
  modal.classList.toggle('hide')
}

function resetGame() {
  toggleDisplay()
  xAttempts = 1
}

let confettiSettings = { target: 'my-canvas' }
let confetti = new ConfettiGenerator(confettiSettings)
confetti.render()
