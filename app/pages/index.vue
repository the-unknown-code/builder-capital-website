<template>
	<main class="page-index layout-block">
		<home-intro />
		<home-portfolio />
		<home-list />
		<home-contact />
	</main>
</template>

<script setup lang="ts">
import useAppStore from '~/store/useAppStore';

const $store = useAppStore();
tryOnMounted(async () => {
	await nextTick();
	$store.enable();
});
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
