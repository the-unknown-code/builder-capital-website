import { defineStore } from 'pinia';

interface Story {
	id: string;
	refreshKey: any;
	content: any;
}

export default defineStore('app.store', {
	state: () => ({
		theme: 'theme-dark',
		enabled: false,
		stories: [] as Story[],
		settings: {} as any,
	}),
	getters: {
		isEnabled: (state: any) => state.enabled,
		currentTheme: (state: any) => state.theme,
		getStoryById: (state: any) => (id: string) =>
			state.stories.find((story: Story) => story.id === id),
		globalSettings: (state: any) => state.settings,
	},
	actions: {
		enable() {
			this.enabled = true;
		},
		disable() {
			this.enabled = false;
		},
		setTheme(theme: string) {
			this.theme = theme;
		},
		switchTheme() {
			this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
		},
		saveStory(story: Story) {
			if (!this.stories.find((s: Story) => s.id === story.id)) {
				this.stories.push(story);
			}
		},
		saveSettings(data: any) {
			this.settings = data;
		},
	},
});
