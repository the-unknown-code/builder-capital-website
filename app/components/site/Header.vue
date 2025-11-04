<template>
	<header class="site-header">
		<div
			v-show="isDesktop"
			@pointerover="active = 'portfolio'"
			@pointerleave="active = ''"
		>
			<common-a-link href="#portfolio">
				<span class="mono">Portfolio</span>
			</common-a-link>
			<utils-borders :blink="active === 'portfolio'" />
		</div>
		<div @pointerover="active = 'logo'" @pointerleave="active = ''">
			<common-svg-mask svg="/images/logo-full.svg" />
		</div>
		<div
			v-show="isDesktop"
			@pointerover="active = 'contact'"
			@pointerleave="active = ''"
		>
			<common-a-link href="#contact">
				<span class="mono">contact</span>
			</common-a-link>
			<utils-borders :blink="active === 'contact'" />
		</div>
	</header>
</template>

<script setup lang="ts">
const active = ref('');
const { isDesktop } = useBreakpoints();
</script>

<style lang="scss" scoped>
.site-header {
	position: fixed;
	top: var(--spacer-16);
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	height: auto;
	justify-content: space-between;
	align-items: center;
	z-index: 99;

	@include desktop {
		width: 656px;
	}

	> div {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--grey);
		padding: var(--spacer-16);
		flex: 1;
		height: 85px;
		background-color: var(--black);
		text-transform: uppercase;

		&:nth-child(1) {
			cursor: pointer;
			border-right: none;
		}

		&:nth-child(3) {
			cursor: pointer;
			border-left: none;
		}

		&:nth-child(2) {
			width: 158px;

			@include desktop {
				width: 318px;
			}

			&:deep(.svg-mask) {
				position: relative;
				width: calc(150px * 0.75); // 75% of 150px

				height: calc(50px * 0.75); // 75% of 50px
				background-color: var(--white);

				@include desktop {
					width: 150px;
					height: 50px;
				}
			}
		}
	}
}
</style>
