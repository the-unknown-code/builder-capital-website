<script setup lang="ts"></script>

<template>
	<section class="home-intro">
		<h1>
			Builder Capital is a principal investment fund that backs emerging tech
			founders
		</h1>
	</section>
</template>

<style lang="scss" scoped>
.home-intro {
	position: relative;
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		max-width: 1200px;
		text-align: center;
		@include h2;

		@include desktop {
			@include h1;
		}
	}
}
</style>
