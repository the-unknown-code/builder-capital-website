import maskReveal from '~/directives/maskReveal';

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('mask-reveal', maskReveal);
});
