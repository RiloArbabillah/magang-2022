<script setup lang="ts">

	useHead({
		title: 'desain-test',
	});
	import Icons from "@/components/Icons.vue";
</script>

<template>
	<div class="w-full flex flex-col place-items-center">
		<div class="grid w-screen h-screen grid-cols-6 -mt-8">
			<div class="col-span-4 bg-[#F5D273] p-10">
				
			</div>
			<div class="col-span-2 bg-rose-400 grid grid-rows-5">
				<div class="p-10 row-span-2">
					
				</div>
				<div class="row-span-3 grid grid-cols-3 grid-rows-3">
					<div class="bg-red-500">
						<Icons name="razor-1" class="" />
					</div>
					<div class="bg-blue-500">
						<Icons name="razor-2" class="" />
					</div>
					<div class="bg-green-500">
						<Icons name="razor-3" class="" />
					</div>
					<div class="bg-cyan-500">
						<Icons name="razor-4" class="" />
					</div>
					<div class="bg-gray-500">
						<Icons name="razor-5" class="" />
					</div>
					<div class="bg-yellow-500">
						<Icons name="razor-6" class="" />
					</div>
					<div class="bg-indigo-500">
						<Icons name="scissor-1" class="" />
					</div>
					<div class="bg-purple-500">
						<Icons name="scissor-2" class="" />
					</div>
					<div class="bg-pink-500">
						<Icons name="knife-1" class="" />
					</div>
				</div>
			</div>
		</div>

		<div class="w-screen h-screen -mb-8 mt-10 flex flex-row">
			<div class="bg-[#F5D273] flex w-4/6 h-full p-10">
				
			</div>
			<div class="bg-rose-400 flex flex-col w-2/6 h-full">
				<div class="p-10 h-2/5">
					
				</div>
				<div class="h-3/5 flex flex-col bg-red-100">
					<div class="flex flex-row h-1/3">
						<div class="w-1/3 p-10 bg-red-500">	
						</div>
						<div class="w-1/3 p-10 bg-blue-500">	
						</div>
						<div class="w-1/3 p-10 bg-rose-500">	
						</div>
					</div>

					<div class="flex flex-row h-1/3">
						<div class="w-1/3 p-10 bg-indigo-500">	
						</div>
						<div class="w-1/3 p-10 bg-gray-500">	
						</div>
						<div class="w-1/3 p-10 bg-green-500">	
						</div>
					</div>

					<div class="flex flex-row h-1/3">
						<div class="w-1/3 p-10 bg-purple-500">	
						</div>
						<div class="w-1/3 p-10 bg-teal-500">	
						</div>
						<div class="w-1/3 p-10 bg-cyan-500">	
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: desain-test
</route>
