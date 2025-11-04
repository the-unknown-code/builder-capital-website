<template>
	<div v-mask-reveal class="ui-card">
		<img :src="block.logo" :alt="block.title" />
		<p>{{ block.description }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps({
	block: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.ui-card {
	position: relative;
	width: 100%;
	aspect-ratio: 1;
	padding: var(--spacer-32) var(--spacer-16);
	border: 1px solid var(--grey);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;

	img {
		width: auto;
		height: 22px;
	}

	p {
		max-width: 320px;
		text-wrap: balance;
	}
}
</style>
