<template>
	<section class="home-list">
		<common-a-link
			v-for="(item, index) in PLACEHOLDER_ITEMS"
			:key="item.project"
			v-mask-reveal
			:href="item.link.url"
			class="grid-item layout-grid"
			@pointerover="active = index"
			@pointerleave="active = null"
		>
			<div class="grid-item--project">
				<span class="h3">{{ item.project }}</span>
			</div>
			<div class="grid-item--type">
				<span class="mono">{{ item.type }}</span>
			</div>
			<div class="grid-item--category">
				<span class="mono">{{ item.category }}</span>
			</div>
			<div class="grid-item--city">
				<span class="mono">{{ item.city }}</span>
			</div>
			<div class="grid-item--link">
				<span class="mono azure">{{ item.link.label }}</span>
				<common-svg-mask svg="/images/arrow.svg" />
			</div>
			<utils-borders :blink="active === index" />
		</common-a-link>
	</section>
</template>

<script setup lang="ts">
const active: Ref<number | null> = ref(null);

const PLACEHOLDER_ITEMS = [
	{
		project: 'Coinflow',
		type: 'PRE-SEED',
		category: 'industry 1, industry 2, industry 3',
		city: 'san francisco',
		link: {
			label: 'coinflow.cash',
			url: 'https://www.google.com',
		},
	},
	{
		project: 'Novanet',
		type: 'SEED',
		category: 'industry 1',
		city: 'Toronto',
		link: {
			label: 'novanet.xyz',
			url: 'https://www.google.com',
		},
	},
];
</script>

<style lang="scss" scoped>
.home-list {
	position: relative;
	padding: var(--spacer-64) 0;

	.grid-item {
		position: relative;
		width: 100vw;
		left: 50%;
		transform: translateX(-50%);
		text-transform: uppercase;
		border-bottom: 1px solid var(--grey);
		padding: var(--spacer-24) var(--spacer-16);
		overflow-y: clip;
		max-width: none;
		background-color: var(--black-95);
		backdrop-filter: blur(2px);

		&:first-child {
			border-top: 1px solid var(--grey);
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100%;
			left: 50%;
			background-color: var(--azure-20);
			transform: translate(-50%, 100%);
			transition: transform 250ms var(--ease-out-circ);
		}

		@include desktop {
			&:hover {
				&::before {
					transform: translate(-50%, 0%);
				}

				&:deep(.svg-mask) {
					opacity: 1;
					transform: translateY(0%);
				}
			}
		}

		> div {
			display: flex;
			align-items: center;
		}

		&--project {
			text-transform: none;

			@include desktop {
				grid-column: span 3;
			}
		}

		&--type {
			@include desktop {
				grid-column: span 1;
			}
		}

		&--category {
			@include desktop {
				grid-column: span 3;
			}
		}

		&--city {
			@include desktop {
				grid-column: span 2;
			}
		}

		&--link {
			justify-content: space-between;

			@include desktop {
				grid-column: span 3;
			}

			&:deep(.svg-mask) {
				position: relative;
				width: 16px;
				height: 16px;
				background-color: var(--azure);

				@include desktop {
					transition: transform 350ms var(--ease-out-circ),
						opacity 350ms var(--ease-out-circ);
					transform: translate(-50%, 50%);
					opacity: 0;
				}
			}
		}
	}
}
</style>
