<template>
	<button class="ui-cta">
		<p class="mono">{{ label }}</p>
		<common-svg-mask svg="/images/arrow.svg" />
	</button>
</template>

<script setup lang="ts">
defineProps({
	label: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.ui-cta {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	border: 1px solid var(--azure-80);
	padding: var(--spacer-16);
	background-color: var(--azure-20);
	color: var(--azure);

	transition: background-color 250ms var(--ease-out-circ),
		color 250ms var(--ease-out-circ);

	&:deep(.svg-mask) {
		position: relative;
		width: 16px;
		height: 16px;
		background-color: var(--azure);

		opacity: 0;
		transform: translate(-50%, 50%);

		transition: opacity 250ms var(--ease-out-circ),
			transform 250ms var(--ease-out-circ);
	}

	@include desktop {
		&:hover {
			background-color: var(--azure-60);
			color: var(--white);

			&:deep(.svg-mask) {
				background-color: var(--white);
				opacity: 1;
				transform: translateY(0%);
			}
		}
	}
}
</style>
