<script setup lang="ts">
	import Tutorial from '@/assets/tutorial.md';

	useHead({
		title: 'tutorial',
	});
</script>

<template>
	<div>
		<div class="my-10 prose border border-black rounded-md p-10">
			<Tutorial />
		</div>
		<router-link
			:to="{ name: 'home' }"
			class="
				mt-5
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>{{ $t('pages.home') }}</router-link
		>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: tutorial
</route>
