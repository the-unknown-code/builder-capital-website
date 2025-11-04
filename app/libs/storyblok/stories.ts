import useAppStore from '~/store/useAppStore';

export const useAsyncStory = async (
	url: string,
	apiOptions: any = {},
	bridgeOptions: any = null
) => {
	const nuxtApp = useNuxtApp();
	const { $preview } = nuxtApp;
	const version: string = $preview ? 'draft' : 'published';
	const refreshKey: Ref<string> = ref(url);
	const story: Ref<any> = ref({});

	const storyblokApi: any = useStoryblokApi();

	const { data } = await useAsyncData(url, async () => {
		const { data } = await storyblokApi.get(`cdn/stories/${url}`, {
			version,
			resolve_links: 'url',
			resolve_links_level: 2,
			...apiOptions,
		});

		return data?.story;
	});

	if (data.value && data.value.content) {
		story.value = data.value;
	} else {
		throw createError({
			statusCode: 404,
			statusMessage: 'Story not found',
			fatal: true,
		});
	}

	// Live Editing
	onMounted(async () => {
		if (bridgeOptions) {
			if (story.value && story.value.id) {
				useStoryblokBridge(
					story.value.id,
					(tmpStory: any) => {
						story.value = tmpStory;
						refreshKey.value = `story-${url}-${
							Math.random() + (1).toString(36).substring(7)
						},`;
					},
					{ preventClicks: true, resolveLinks: 'url', ...bridgeOptions }
				);
			}
		}
	});

	return {
		story,
		refreshKey,
	};
};

export const useAsyncStoryState = async (
	url: string,
	apiOptions: any = {},
	bridgeOptions: any = null
) => {
	const store = useAppStore();

	if (store.getStoryById(url)) {
		const story = store.getStoryById(url);

		return {
			story: story.content,
			refreshKey: story.refreshKey,
		};
	} else {
		const { story, refreshKey } = await useAsyncStory(
			url,
			apiOptions,
			bridgeOptions
		);
		store.saveStory({ id: url, refreshKey, content: story.value });
		return { story, refreshKey };
	}
};
