<script setup lang="ts">
	useHead({
		title: 'rdn',
	});

	import { useStore } from '@/store';
	const store = useStore();
	store.input = '';
	store.min = 1;
	store.max = 100;

	const generateRandom = () => {
		store.input = Math.floor(Math.random() * store.max + store.min);
	}
</script>

<template>
	<div class="min-h-[80vh] dark:text-black">
		<div class="max-w-lg mb-10 border border-gray-700 rounded-md p-5">
			<div class="w-full">
				<input disabled class="w-full rounded-md px-4 py-2 text-right" type="text" v-model="store.input">
			</div>
			<div class="w-full grid gap-5 mt-5">
				<div>
					<label for="min">Min</label>
					<input id="min" class="w-full rounded-md px-4 py-2 text-right" type="text" v-model="store.min">
				</div>
			</div>
			<div class="w-full grid grid-flow-row gap-5 mt-5">
				<button @click="generateRandom()" type="button" class="border border-gray-700 p-4 bg-gray-100 rounded-md">
					Remove Duplicate Number
				</button>
			</div>
		</div>
		<router-link
			:to="{ name: 'home' }"
			class="
				hover:text-gray-500
				dark:hover:text-gray-200
				hover:underline
			"
			>{{ $t('pages.home') }}</router-link
		>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: rdn
</route>
