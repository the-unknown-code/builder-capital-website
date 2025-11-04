<template>
	<div :class="['utils-borders', { blink }]">
		<div class="utils-borders--tl" />
		<div class="utils-borders--tr" />
		<div class="utils-borders--bl" />
		<div class="utils-borders--br" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	blink: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
@keyframes blink-rough {
	0% {
		opacity: 0;
	}
	6% {
		opacity: 0.25;
	}
	13% {
		opacity: 0.41;
	}
	22% {
		opacity: 0.32;
	}
	28% {
		opacity: 0.62;
	}
	38% {
		opacity: 0.49;
	}
	51% {
		opacity: 0.77;
	}
	62% {
		opacity: 0.18;
	}
	75% {
		opacity: 0.82;
	}
	87% {
		opacity: 0.96;
	}
	100% {
		opacity: 1;
	}
}

.utils-borders {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	pointer-events: none;

	&.blink {
		animation: blink-rough 0.45s cubic-bezier(0.77, 0, 0.175, 1) forwards;
	}

	> div {
		position: absolute;
		width: 16px;
		height: 16px;
		background-color: var(--azure);

		&:nth-child(1) {
			top: 0;
			left: 0;
			clip-path: polygon(0 0, 100% 0, 100% 2px, 2px 2px, 2px 100%, 0 100%);
		}

		&:nth-child(2) {
			top: 0;
			right: 0;
			clip-path: polygon(
				0 2px,
				0 0,
				100% 0,
				100% 100%,
				calc(100% - 2px) 100%,
				calc(100% - 2px) 2px
			);
		}

		&:nth-child(3) {
			bottom: 0;
			left: 0;

			clip-path: polygon(
				2px 0,
				2px calc(100% - 2px),
				100% calc(100% - 2px),
				100% 100%,
				0 100%,
				0 0
			);
		}

		&:nth-child(4) {
			bottom: 0;
			right: 0;
			clip-path: polygon(
				calc(100% - 2px) calc(100% - 2px),
				calc(100% - 2px) 0,
				100% 0,
				100% 100%,
				0 100%,
				0 calc(100% - 2px)
			);
		}
	}
}
</style>
