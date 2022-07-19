<script setup lang="ts">
	import Readme from '@/assets/readme.md';
	import HariKedua from '@/assets/hariKedua.md';

	useHead({
		title: 'jurnal',
	});
</script>

<template>
	<div class="">
		<div class="my-10 prose border border-black rounded-md p-10 dark:bg-white">
			<Readme class="" />
		</div>
		<div class="my-10 prose border border-black rounded-md p-10 dark:bg-white">
			<HariKedua />
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
name: jurnal
</route>
