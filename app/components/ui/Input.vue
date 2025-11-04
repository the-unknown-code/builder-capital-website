<template>
	<div class="ui-input mono">
		<input v-if="!textarea" v-model="model" :type="type" :placeholder="label" />
		<textarea v-else v-model="model" :placeholder="label"></textarea>
	</div>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'text',
	},
	textarea: {
		type: Boolean,
		default: false,
	},
});

const model = defineModel({
	type: String,
	required: true,
});
</script>

<style lang="scss" scoped>
.ui-input {
	position: relative;
	width: 100%;
	height: auto;

	input,
	textarea {
		width: 100%;
		height: 60px;
		border: 1px solid var(--grey);
		padding: var(--spacer-16);
		font-size: 14px;
		font-weight: 300;
		line-height: 12px;
		letter-spacing: 3%;
		appearance: none;
	}

	textarea {
		height: 140px;
		resize: none;
	}
}
</style>
