export default function intro () {
  const introText = ">> I'm a software developer... >> Scroll for cool stuff!"
  const lineOne = document.getElementById('line-one')
  const lineTwo = document.getElementById('line-two')
  const arrowEl = document.getElementById('arrow')
  const intervalTimeout = 40
  const startDelay = 200

  let i = 0
  let current = lineOne
  let animationToken

  setTimeout(() => {
    let intervalToken = setInterval(() => {
      if (i > 29) {
        current = lineTwo
      }

      current.innerHTML += introText[i]
      i += 1

      if (i === introText.length) {
        arrowEl.style.opacity = 1
        clearInterval(intervalToken)
      }
    }, intervalTimeout)
  }, startDelay)
}
