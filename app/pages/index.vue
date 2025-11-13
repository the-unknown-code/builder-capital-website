<template>
	<storyblok-wrapper url="home">
		<template #default="{ story, refreshKey }">
			<main :key="refreshKey" class="page-index layout-block">
				<home-intro :block="getBlock(story, 'title')" />
				<home-portfolio :block="getBlock(story, 'portfolio')" />
				<home-list :block="getBlock(story, 'table')" />
				<home-contact :block="getBlock(story, 'form')" />
			</main>
		</template>
	</storyblok-wrapper>
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
tryOnMounted(async () => {
	await nextTick();
	$store.enable();
});

const getBlock = (story: any, block: string) => {
	return story.content.body.find((b: any) => b.component === block);
};
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
