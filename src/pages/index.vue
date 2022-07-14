<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import UserImage from '@/assets/users.png';

	useHead({
		title: 'Magang Vue 2022',
	});

	const store = useStore();
	const { t } = useI18n();
	const bgList = [
		'bg-slate-400 text-black',
		'bg-slate-500 text-white',
		'bg-gray-400 text-black',
		'bg-gray-500 text-white',
		'bg-zinc-400 text-black',
		'bg-zinc-500 text-white',
		'bg-neutral-400 text-black',
		'bg-neutral-500 text-white',
		'bg-stone-400 text-black',
		'bg-stone-500 text-white',
		'bg-red-400 text-white',
		'bg-red-500 text-white',
		'bg-orange-400 text-black',
		'bg-orange-500 text-white',
		'bg-amber-400 text-black',
		'bg-amber-500 text-black',
		'bg-yellow-400 text-black',
		'bg-yellow-500 text-black',
		'bg-lime-400 text-black',
		'bg-lime-500 text-black',
		'bg-green-400 text-black',
		'bg-green-500 text-black',
		'bg-emerald-400 text-black',
		'bg-emerald-500 text-black',
		'bg-teal-400 text-black',
		'bg-teal-500 text-black',
		'bg-cyan-400 text-black',
		'bg-cyan-500 text-black',
		'bg-sky-400 text-black',
		'bg-sky-500 text-black',
		'bg-blue-400 text-black',
		'bg-blue-500 text-white',
		'bg-indigo-400 text-black',
		'bg-indigo-500 text-white',
		'bg-violet-400 text-black',
		'bg-violet-500 text-white',
		'bg-purple-400 text-black',
		'bg-purple-500 text-white',
		'bg-fuchsia-400 text-black',
		'bg-fuchsia-500 text-white',
		'bg-pink-400 text-white',
		'bg-pink-500 text-white',
		'bg-rose-400 text-white',
		'bg-rose-500 text-white',
	];

	const tryParse = (array) => {
		return array.join(' ');
	}
	
	const random = () => {
		console.log(Math.floor(Math.random() * bgList.length))
		return Math.floor(Math.random() * bgList.length);
	}
</script>

<template>
	<div class="grid place-items-center min-h-[80vh] py-10">
		<div>
			<div :class="tryParse(bgList)">
			</div>
			
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
		<div class="grid grid-flow-row grid-cols-3 gap-5 mt-10">
				<router-link
					:to="{ name: 'jurnal' }"
					:class="bgList[random()]"
					class="
						px-4 py-3
						rounded-md
						text-center
						hover:invert
						dark:hover:invert
						hover:underline
					"
					>Halaman Jurnal Harian</router-link
				>
				<router-link
					:to="{ name: 'todo-list' }"
					:class="bgList[random()]"
					class="
						px-4 py-3
						rounded-md
						text-center
						hover:invert
						dark:hover:invert
						hover:underline
					"
					>Halaman Todo List</router-link
				>
				<router-link
					:to="{ name: 'tutorial' }"
					:class="bgList[random()]"
					class="
						px-4 py-3
						rounded-md
						text-center
						hover:invert
						dark:hover:invert
						hover:underline
					"
					>Halaman Tutorial</router-link
				>
				<router-link
					:to="{ name: 'kalkulator' }"
					:class="bgList[random()]"
					class="
						px-4 py-3
						rounded-md
						text-center
						hover:invert
						dark:hover:invert
						hover:underline
					"
					>Halaman Kalkulator</router-link
				>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
