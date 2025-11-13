<template>
	<section id="portfolio" class="home-portfolio">
		<div class="layout-block">
			<hgroup>
				<h2>{{ block.title }}</h2>
				<p>
					{{ block.description }}
				</p>
			</hgroup>
			<div class="home-portfolio__cards">
				<ui-card v-for="card in block.list" :key="card._uid" :block="card" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	block: any;
}>();
</script>

<style lang="scss" scoped>
.home-portfolio {
	padding: var(--spacer-64) 0;

	.layout-block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	hgroup {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--spacer-16);

		h2 {
			@include h2;
		}

		p {
			text-align: center;
			text-wrap: balance;
			max-width: 620px;
		}
	}

	&__cards {
		position: relative;
		width: 100%;
		margin-top: var(--spacer-64);
		display: grid;
		gap: var(--spacer-8);
		grid-template-columns: 1fr;

		@media screen and (min-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 1024px) {
			margin-top: 10vw;
			grid-template-columns: repeat(3, 1fr);

			> div {
				&:nth-child(3n + 1) {
					transform: translateY(-10%);
				}

				&:nth-child(3n + 3) {
					transform: translateY(-5%);
				}
			}
		}

		@media screen and (min-width: 1280px) {
			grid-template-columns: repeat(4, 1fr);

			> div {
				&:nth-child(3n + 1) {
					transform: translateY(0%);
				}

				&:nth-child(4n + 1) {
					transform: translateY(-25%);
				}

				&:nth-child(3n + 3) {
					transform: translateY(0%);
				}

				&:nth-child(4n + 2) {
					transform: translateY(0%);
				}

				&:nth-child(4n + 3) {
					transform: translateY(-10%);
				}
			}
		}

		> * {
			flex: 1;
		}
	}
}
</style>
