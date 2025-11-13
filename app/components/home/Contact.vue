<template>
	<section id="contact" class="home-contact">
		<div class="layout-block">
			<hgroup>
				<h3 v-mask-reveal>{{ block.title }}</h3>
				<p v-mask-reveal class="h1">
					{{ block.description }}
				</p>
			</hgroup>

			<form class="home-contact--form" @submit.prevent="() => {}">
				<ui-input label="Your Name" />
				<ui-input label="Your Company" />
				<ui-input label="Your E-Mail" type="email" />
				<ui-input
					label="Write your message here... (max 300 characters)"
					textarea
				/>
				<ui-cta label="Get in Touch" />
			</form>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	block: any;
}>();
</script>

<style lang="scss" scoped>
.home-contact {
	padding: var(--spacer-64) 0 calc(var(--spacer-64) * 2) 0;

	hgroup {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacer-16);

		.h1 {
			text-align: center;
			text-wrap: balance;
			margin: 0 auto;
			max-width: 1200px;
			@include h2;

			@include desktop {
				@include h1;
			}
		}
	}

	&--form {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: var(--spacer-16);
		max-width: 360px;
		margin: 0 auto;
		margin-top: var(--spacer-64);
	}
}
</style>
