import '../../node_modules/aos/dist/aos.css'
import '../styles/devicons.scss'
import '../styles/main.scss'

import AOS from 'aos'
import Slider from './slider'
import intro from './intro'
import { scrollTo, debounce } from './utils'

const installNavListeners = function installNavListeners () {
  const navContainer = document.getElementById('nav-container')
  document.addEventListener('scroll', debounce((e) => {
    if (document.documentElement.scrollTop > 10) {
      navContainer.style.opacity = 1
      document.removeEventListener('scroll', this)
    }
  }, 200))

  document.querySelectorAll('nav li').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.currentTarget.dataset.dest) {
        const className = e.currentTarget.dataset.dest
        const destEl = document.querySelector(className)
        scrollTo(destEl.offsetTop, 500)
      }
    })
  })
}

const setUpSlider = function setUpSlider () {
  const sliderNode = document.getElementById('slider')
  const left = document.getElementById('left')
  const right = document.getElementById('right')
  const sliderToken = new Slider(sliderNode)

  left.addEventListener('click', sliderToken.prevSlide)
  right.addEventListener('click', sliderToken.nextSlide)
}

const init = function init () {
  AOS.init({
    duration: 600,
    disable: 'mobile',
    once: true
  })
  window.onload = AOS.refreshHard
  intro()
  installNavListeners()
  setUpSlider()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
