import smoothScrollbar from './smooth-scrollbar'
import toggleHeaderSubtitleAndDots from './header-toggle-subtitle-and-dots'
import spinScrollIcon from './spin-scroll-icon'
import fadeInOut from './fade-in-out'
// project triggers
import marqueeOnMobile from './project-marquee-mobile'
import { activeProjectDesktop } from './project-desktop'
import showAboutImage from './about-image'
import footerTimeline from './footer-timeline'

export default function initScrollTriggers() {
	smoothScrollbar()
	toggleHeaderSubtitleAndDots()
	spinScrollIcon()
	fadeInOut()
	showAboutImage()
	footerTimeline()

	if (/Mobi|Android/i.test(navigator.userAgent)) {
		marqueeOnMobile()
	} else {
		activeProjectDesktop()
	}
}

// TODO: remove fixGsapMarkers for production
