<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import UserImage from '@/assets/users.png';
	import Readme from '@/assets/readme.md';
	import HariKedua from '@/assets/hariKedua.md';

	useHead({
		title: 'Magang Vue 2022',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="grid place-items-center min-h-[80vh] py-10">
		<!-- <div class="my-10 prose border border-black rounded-md p-10">
			<Readme />
		</div>
		<div class="my-10 prose border border-black rounded-md p-10">
			<HariKedua />
		</div> -->
		<div>
			<div class="grid max-w-lg text-center place-items-center">
				<img :src="UserImage" width="300" class="mx-auto" />
				<h1 class="uppercase font-bold text-xl mt-10">Profile</h1>
				<div class="text-sm text-justify w-1/3">
					<p>
						Nama : Rilo Arbabillah
					</p>
					<p>
						TTL : Samarinda, 2x-xx-xx
					</p>
					<p>
						Agama: Islam
					</p>
					<p>
						Jenis Kelamin : L
					</p>
				</div>
			</div>
			<div class="max-w-lg text-center mt-10">
				<h1 class="uppercase font-bold text-xl">About</h1>
				<p class="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, impedit ipsum alias unde accusamus ut dignissimos a incidunt nemo nam. Labore, dignissimos. Culpa iste doloremque accusantium unde, tenetur magni nesciunt!</p>
			</div>
			<div class="grid max-w-lg text-center place-items-center mt-10">
				<h1 class="uppercase font-bold text-xl">Contact</h1>
				<div class="text-sm text-justify w-1/3">
					<p>
						Lorem
					</p>
					<p>
						Ipsum
					</p>
					<p>
						Dolor
					</p>
					<p>
						Sit Amet
					</p>
				</div>
			</div>
			<div class="max-w-lg text-center mt-10">
				<h1 class="uppercase font-bold text-xl">Hobby</h1>
				<p class="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, impedit ipsum alias unde accusamus ut dignissimos a incidunt nemo nam. Labore, dignissimos. Culpa iste doloremque accusantium unde, tenetur magni nesciunt!</p>
			</div>
			<div class="max-w-lg text-center mt-10">
				<h1 class="uppercase font-bold text-xl">Skill</h1>
				<p class="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, impedit ipsum alias unde accusamus ut dignissimos a incidunt nemo nam. Labore, dignissimos. Culpa iste doloremque accusantium unde, tenetur magni nesciunt!</p>
			</div>
			<div class="max-w-lg text-center mt-10">
				<h1 class="uppercase font-bold text-xl">Education</h1>
				<p class="text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, impedit ipsum alias unde accusamus ut dignissimos a incidunt nemo nam. Labore, dignissimos. Culpa iste doloremque accusantium unde, tenetur magni nesciunt!</p>
			</div>
		</div>
		<router-link
			:to="{ name: 'jurnal' }"
			class="
				mt-5
				text-center
				hover:text-gray-200
				dark:hover:text-gray-500
				hover:underline
			"
			>Halaman Jurnal Harian</router-link
		>
	</div>
</template>

<route lang="yaml">
name: home
</route>
