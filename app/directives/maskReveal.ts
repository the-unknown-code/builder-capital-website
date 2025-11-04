import gsap, { ScrollTrigger } from 'gsap/all';
import type { DirectiveBinding } from 'vue';

export default {
	mounted(el: HTMLElement, binding: DirectiveBinding) {
		const delay = binding.value?.delay || undefined;

		gsap.set(el, {
			maskImage: 'linear-gradient(0deg, black 0%, transparent 0%)',
		});

		const trigger = ScrollTrigger.create({
			trigger: el,
			scrub: delay !== undefined ? false : 1,
			start: 'top 95%',
			end: 'bottom 65%',
			animation: gsap.to(el, {
				delay,
				maskImage: 'linear-gradient(to bottom, black 75%, transparent 200%)',
			}),
		});

		(el as any)._maskRevealTrigger = trigger;
	},
	beforeUnmount(el: HTMLElement) {
		const trigger = (el as any)._maskRevealTrigger;
		if (trigger) {
			trigger.kill();
			delete (el as any)._maskRevealTrigger;
		}
	},
	getSSRProps() {
		// you can provide SSR-specific props here
		return {};
	},
};
