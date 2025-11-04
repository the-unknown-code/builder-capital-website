<template>
	<section class="home-portfolio" id="portfolio">
		<div class="layout-block">
			<hgroup>
				<h2>Portfolio</h2>
				<p>
					Partnering with visionary founders building the next generation of
					Web3 infrastructure and applications.
				</p>
			</hgroup>
			<div class="home-portfolio__cards">
				<ui-card
					v-for="card in PLACEHOLDER_CARDS"
					:key="card.id"
					:block="card"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const PLACEHOLDER_CARDS = [
	{
		id: 'Aethir',
		logo: '/images/aethir.png',
		description: 'Powerful GPU solutions on demand',
	},
	{
		id: 'Grass',
		logo: '/images/grass.png',
		description: 'Get rewards on your unused internet',
	},
	{
		id: 'Octra',
		logo: '/images/octra.png',
		description: 'Universal FHE protocol enabling the future',
	},
	{
		id: 'Antimetal',
		logo: '/images/antimetal.png',
		description: 'Savings, visibility and infrastructure guardrails',
	},
	{
		id: 'Fraction AI',
		logo: '/images/fraction-ai.png',
		description: 'Powerful GPU solutions on demand',
	},
	{
		id: 'Aethir',
		logo: '/images/aethir.png',
		description: 'Powerful GPU solutions on demand',
	},
	{
		id: 'Grass',
		logo: '/images/grass.png',
		description: 'Get rewards on your unused internet',
	},
	{
		id: 'Octra',
		logo: '/images/octra.png',
		description: 'Universal FHE protocol enabling the future',
	},
];
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
