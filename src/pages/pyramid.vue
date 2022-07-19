<script setup lang="ts">
	useHead({
		title: 'pyramid',
	});

	import { useStore } from '@/store';
	const store = useStore();
	store.tinggi = 5;

	const generatePyramid = (tinggi) => {
		let doc = document.getElementById("pyramidTag")
		doc.innerHTML = ''
		for (let y = 1; y <= tinggi; y++) {
			// let spasi = '&nbsp;'.repeat(tinggi - y)
			let str = '*'.repeat(y * 2 - 1)
			doc.innerHTML += (str) + '<br>'
		}
	}

	function pyramid(n) {
		for (let i = 1; i <= n; i++) {
			let str = ' '.repeat(n - i);
			let str2 = '*'.repeat(i * 2 - 1);
			console.log(str + str2 + str);
		}
	}
</script>

<template>
	<div class="min-h-[80vh]">
		<div class="max-w-lg mb-10 border border-gray-700 rounded-md p-5">
			<div class="w-full">
				<input class="focus:appearance-none focus:outline-none hover:appearance-none hover:outline-none appearance-none outline-none w-full rounded-md px-4 py-2 text-right" type="number" v-model="store.tinggi">
			</div>
			<div class="w-full grid grid-flow-row gap-5 mt-5">
				<button @click="generatePyramid(store.tinggi)" type="button" class="border border-gray-700 p-4 bg-gray-100 rounded-md">
					Generate pyramid
				</button>
			</div>
			<div class="mt-10">
				<p id="pyramidTag"></p>
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
name: pyramid
</route>
