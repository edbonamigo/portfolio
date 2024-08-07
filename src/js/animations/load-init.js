import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import initScrollTriggers from '../scrollTriggers'

import customCursor from './cursor'
import { hideMenu } from './header-menu'

gsap.registerPlugin(Flip)

const DOM = {
  body: document.body,
  headerTitlesArr: gsap.utils.toArray('.header__titles h2'),
  headerMenu: document.querySelector('.header__menu'),
  headerContact: document.querySelector('.header__menu__item.--contact'),
  headerLang: document.querySelector('.header__menu__item.--lang'),
  headerTheme: document.querySelector('.header__menu__item.--theme'),
  headerLine: document.querySelector('.header__line'),
  heroTitlesArr: gsap.utils.toArray('.section--hero h1'),
  sectionHero: document.querySelector('.section--hero'),
  contentArr: gsap.utils.toArray('.--hide-show'),
  scrollIcon: gsap.utils.toArray('.scroll-icon'),
  dotsWrapper: document.querySelector('.dots'),
  dotsArr: gsap.utils.toArray('.dot')
}

const introTimeline = () => {
  const introTl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: 'power2.out'
    },
    onStart: () => {
      DOM.body.classList.remove('--loading')
      DOM.dotsArr.forEach((dot) => dot.classList.add('theme--background'))
    },
    // onComplete: () => hideMenu()
  })

  introTl
    .to(DOM.headerLine, { x: '0' })
    .to(
      [
        DOM.headerTheme,
        DOM.headerLang,
        DOM.headerContact,
        DOM.headerTitlesArr[0]
      ],
      {
        y: '0',
        stagger: 0.15
      },
      '0'
    )
    .from(
      [DOM.scrollIcon, DOM.heroTitlesArr],
      {
        y: '100%',
        stagger: 0.06
      },
      '0'
    )
}

export const stopLoadAndInit = () => {
  initScrollTriggers()

  let state = Flip.getState(DOM.dotsArr)
  DOM.dotsWrapper.style.animation = 'unset'
  Flip.from(state, {
    ease: 'power3.inOut',
    scale: true
  })
  state = Flip.getState(DOM.dotsArr)
  DOM.dotsWrapper.classList.remove('--loading')

  Flip.from(state, {
    duration: 1,
    ease: 'power3.inOut',
    scale: true,
    onComplete: () => {
      introTimeline()
      customCursor()
    }
  })
}
