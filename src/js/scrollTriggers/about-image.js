import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const DOM = {
	about: document.querySelector('.about.section'),
	imageWrapper: document.querySelector('.about__image'),
	image: document.querySelector('.about__image__of__ed')
}

export default function showAboutImage() {
	fadeIn()
	fadeOut()
}

const fadeIn = () => {
	gsap.to(DOM.imageWrapper, {
		autoAlpha: 0.4,
		y: '-30%',
		ease: 'power1.out',
		scrollTrigger: {
			trigger: DOM.about,
			start: 'top 60%',
			end: 'top 10%',
			scrub: true,
			toggleActions: 'play reverse play reverse'
		}
	})
}

const fadeOut = () => {
	gsap.to(DOM.image, {
		autoAlpha: 0,
		y: '-30%',
		ease: 'power1.in',
		scrollTrigger: {
			trigger: DOM.about,
			start: 'top 10%',
			end: 'top -40%',
			scrub: true,
			toggleActions: 'play reverse play reverse'
		}
	})
}
