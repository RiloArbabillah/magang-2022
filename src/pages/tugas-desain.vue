<script setup lang="ts">
useHead({
  title: "tugas-desain",
});
import Icons from '@/components/Icons.vue';
</script>

<template>
  <div class="">
    <div class="grid grid-cols-3 grid-flow-row -mx-8 bg-white -mt-8 mb-8">
      <div
        class="bg-[#f5d273] col-span-2 h-screen py-12 px-20 text-cyan-900 grid grid-rows-5"
      >
        <div>
          <div class="flex justify-between">
            <div class="uppercase text-3xl font-semibold cursor-pointer">Shave</div>
            <div class="capitalize text-xl flex gap-10 items-center">
              <span class="cursor-pointer">how it works</span>
              <span class="cursor-pointer">products</span>
              <span class="cursor-pointer">gifts</span>
              <span class="cursor-pointer">join today</span>
            </div>
          </div>
        </div>
        <div class="row-span-3">
          <div class="text-6xl tracking-wider leading-tight mb-8">
            The ultimate app that
            <br />
            helps you find the right
            <br />
            high-quality blade for
            <br />
            your face.
          </div>
          <div>
            <button
              type="button"
              class="uppercase px-32 py-4 bg-cyan-900 text-[#f5d273] font-semibold text-xl"
            >
              get started
            </button>
          </div>
        </div>
        <div class="relative">
			<div class="absolute bottom-0 right-0">
				<Icons name="razor-1" class="w-64" />
			</div>
        </div>
      </div>
      <div class="h-screen grid grid-cols-1 grid-rows-5">
        <div class="bg-rose-400 row-span-2 flex flex-col items-center justify-center">
			<div class="text-center text-xl tracking-wider leading-snug mb-5">
				We have high-quality
				<br>
				grooming gifts for everyone.
				<br>
				You'll find gift sets,
				<br>
				giftcards, and more!
			</div>
			<div>
				<button type="button" class="py-2 px-10 bg-cyan-200 text-cyan-900 uppercase font-bold">shop the gift sets</button>
			</div>
		</div>
        <div class="bg-green-500 row-span-3 grid grid-rows-3 grid-cols-3">
          <div class="bg-rose-200 flex items-center justify-center">
		  	<Icons name="razor-1" class="w-28" />
		  </div>
          <div class="bg-teal-200 flex items-center justify-center">
		  	<Icons name="razor-2" class="w-28" />
		  </div>
          <div class="bg-pink-300 flex items-center justify-center">
		  	<Icons name="razor-3" class="w-28" />
		  </div>
          <div class="bg-green-200 flex items-center justify-center">
		  	<Icons name="razor-4" class="w-28" />
		  </div>
          <div class="bg-rose-400 flex items-center justify-center">
		  	<Icons name="razor-5" class="w-28" />
		  </div>
          <div class="bg-blue-200 flex items-center justify-center">
		  	<Icons name="razor-6" class="w-28" />
		  </div>
          <div class="bg-rose-200 flex items-center justify-center">
		  	<Icons name="scissor-1" class="w-28" />
		  </div>
          <div class="bg-teal-200 flex items-center justify-center">
		  	<Icons name="scissor-2" class="w-28" />
		  </div>
          <div class="bg-yellow-200 flex items-center justify-center">
		  	<Icons name="knife-1" class="w-28" />
		  </div>
        </div>
      </div>
    </div>
    <router-link
      :to="{ name: 'home' }"
      class="mt-5 hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
      >{{ $t("pages.home") }}</router-link
    >
  </div>
</template>

<style scoped></style>

<route lang="yaml">
name: tugas-desain
</route>
