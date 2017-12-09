export default function intro () {
  const introText = "I'm a software developer... >> Scroll for cool stuff!"
  const lineOne = 'line-one'
  const lineTwo = 'line-two'
  const arrowEl = document.getElementById('arrow')

  let i = 0
  let current = lineOne
  let animationToken

  const step = ts => {
    if (i === introText.length) {
      arrowEl.style.opacity = 1
      return cancelAnimationFrame(animationToken)
    }

    if (i > 27) current = lineTwo
    document.getElementById(current).innerHTML += introText[i]
    i += 1

    setTimeout(() => {
      animationToken = requestAnimationFrame(step)
    }, 35)
  }

  animationToken = requestAnimationFrame(step)
}
