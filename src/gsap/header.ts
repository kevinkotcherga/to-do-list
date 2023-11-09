import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapHeader = () => {
	gsap.registerPlugin(CustomEase);
	const charsTitle = document.querySelectorAll('.header__title .word');

	gsap.fromTo(
		charsTitle,
		{
			yPercent: 50,
			opacity: 0,
		},
		{
		yPercent: 0,
		ease: 'ease',
		opacity: 1,
    stagger: 0.08,
    duration: 0.5,
		},
	);

		gsap.fromTo(
		'.header__underline',
		{
			opacity: 0,
		},
		{
		xPercent: 0,
		ease: 'ease',
		opacity: 1,
		delay: 0.5,
		},
	);

	gsap.fromTo(
		'.header__description',
		{
			opacity: 0,
		},
		{
		ease: 'ease',
		opacity: 1,
		delay: 0.7,
		},
	);

		gsap.fromTo(
		'.header__button',
		{
			opacity: 0,
		},
		{
		ease: 'ease',
		opacity: 1,
		delay: 0.8,
		},
	);

	gsap.fromTo(
		'.badge--landing-page-left',
		{
			y: '0',
		},
		{
			y: '-200px',
			scrollTrigger: {
				trigger: '.header__title',
				start: 'top 20%',
				end: 'bottom -300vw',
				scrub: 0.5,
			},
		},
	);

	gsap.fromTo(
		'.badge--landing-page-right',
		{
			y: '0',
		},
		{
			y: '-200px',
			scrollTrigger: {
				trigger: '.header__title',
				start: 'top 20%',
				end: 'bottom -300vw',
				scrub: 0.5,
			},
		},
	);
};
