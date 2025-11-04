import { useAsyncStoryState } from '~/libs/storyblok';
import useAppStore from '~/store/useAppStore';

export default defineNuxtPlugin(async () => {
	const {
		public: { app },
	} = useRuntimeConfig();

	if (app.storyblok.enabled && app.storyblok.settings) {
		const { story: settings } = await useAsyncStoryState(
			app.storyblok.settings
		);
		useAppStore().saveSettings(settings);
	}
});
