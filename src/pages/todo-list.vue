<script setup lang="ts">
	import { useStore } from '@/store';
	const store = useStore();
	let variabelInput = '';

	useHead({
		title: 'todo list',
	});
	
	store.listTodo = [];
	const simpanTodo = (value) => {
		store.listTodo.push(value)
	}

	const hapusTodo = (index) => {
		store.listTodo.splice(index, 1)
	}
</script>

<template>
	<div>
		<div class="min-h-[70vh] dark:text-black">
			<h1 class="text-xl mb-10 dark:text-white">Halaman Todo List</h1>	

			<div class="flex">
				<input class="w-full rounded-md" type="text" v-model="variabelInput">
				<button @click="simpanTodo(variabelInput)" type="button" class="px-4 py-2 bg-blue-500 rounded-md ml-3 text-white">Add</button>
			</div>
			<div class="grid grid-cols-1 gap-5 my-10">
				<div class="bg-gray-200 px-4 py-2 rounded-md flex justify-between items-center" v-for="(item, index) in store.listTodo" :key="index">
					<span>{{item}}</span>
					<button @click="hapusTodo(index)" type="button" class="bg-red-500 px-4 py-2 rounded-md text-white">Hapus</button>
				</div>
			</div>
		</div>
		<router-link
			:to="{ name: 'home' }"
			class="
				mt-5
				hover:text-gray-500
				dark:hover:text-gray-200
				hover:underline
			"
		>{{ $t('pages.home') }}</router-link>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: todo-list
</route>
