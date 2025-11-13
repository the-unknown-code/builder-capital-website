import { useAsyncStoryState } from '~/libs/storyblok';
import useAppStore from '~/store/useAppStore';

export default defineNuxtPlugin(async () => {
	const {
		public: { app },
	} = useRuntimeConfig();

	if (app.storyblok.enabled && typeof app.storyblok.settings === 'string') {
		const { story: settings } = await useAsyncStoryState(
			app.storyblok.settings
		);
		useAppStore().saveSettings(settings);
	}
});
