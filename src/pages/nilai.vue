<script setup lang="ts">
	import Khadafi from '@/assets/nilai/khadafi.md';

	useHead({
		title: 'nilai',
	});
</script>

<template>
	<div class="w-full flex flex-col place-items-center">
		<div class="my-10 prose border border-black rounded-md p-10 dark:bg-white max-w-7xl w-full">
			<Khadafi class="" />
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
name: nilai
</route>
