<template>
	<div v-mask-reveal class="ui-card">
		<img :src="block.logo.filename" :alt="block.description" />
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
	aspect-ratio: 8/7;
	padding: var(--spacer-32) var(--spacer-16);
	border: 1px solid var(--grey);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	background-color: var(--black-95);
	backdrop-filter: blur(2px);

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
