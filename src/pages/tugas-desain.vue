<script setup lang="ts">
useHead({
  title: "tugas-desain",
});
import Icons from "@/components/Icons.vue";
</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 grid-flow-row -mx-8 bg-white -mt-8 mb-8 aspect-video">
      <div
        class="bg-[#f5d273] col-span-2 h-screen py-3 px-5 md:py-6 md:px-10 lg:py-12 lg:px-20 text-cyan-900 grid grid-rows-5 aspect-square"
      >
        <div class="">
          <div class="flex justify-center md:justify-between w-full">
            <div
              class="uppercase hidden md:block md:text-xl lg:text-2xl xl:text-3xl font-semibold cursor-pointer"
            >
              Shave
            </div>
            <div
              class="capitalize text-xs sm:text-sm md:text-base lg:text-md xl:text-xl flex w-full justify-center gap-3 md:gap-6 lg:gap-10 items-center"
            >
              <span class="cursor-pointer">how it works</span>
              <span class="cursor-pointer">products</span>
              <span class="cursor-pointer">gifts</span>
              <span class="cursor-pointer">join today</span>
            </div>
          </div>
        </div>
        <div class="row-span-4 md:row-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div
            class="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider leading-tight mb-8"
          >
            The ultimate app that
            <br />
            helps you find the right
            <br />
            high-quality blade for
            <br />
            your face.
          </div>
          <div class="flex w-full md:justify-start justify-center">
            <button
              type="button"
              class="uppercase px-16 md:px-20 lg:px-24 xl:px-32 py-4 bg-cyan-900 text-[#f5d273] font-semibold text-base md:text-md lg:text-lg xl:text-xl"
            >
              get started
            </button>
          </div>
          <div class="md:hidden mt-auto">
            <Icons name="razor-1" class="xl:w-64 lg:w-52 md:w-32 w-52 mt-auto" />
          </div>
        </div>
        <div class="relative hidden md:flex">
          <div class="md:absolute bottom-0 right-0">
            <Icons name="razor-1" class="xl:w-64 lg:w-52 w-52" />
          </div>
        </div>
      </div>
      <div class="h-screen grid grid-cols-1 grid-rows-5">
        <div class="bg-rose-400 row-span-2 flex flex-col items-center justify-center aspect-square">
          <div class="text-center md:text-md xl:text-xl tracking-wider leading-snug mb-5">
            We have high-quality
            <br />
            grooming gifts for everyone.
            <br />
            You'll find gift sets,
            <br />
            giftcards, and more!
          </div>
          <div>
            <button
              type="button"
              class="py-2 px-10 bg-cyan-200 text-cyan-900 uppercase font-bold"
            >
              shop the gift sets
            </button>
          </div>
        </div>
        <div class="bg-green-500 row-span-3 grid grid-rows-3 grid-cols-3">
          <div class="bg-rose-200 flex items-center justify-center aspect-square">
            <Icons name="razor-1" class="w-28" />
          </div>
          <div class="bg-teal-200 flex items-center justify-center aspect-square">
            <Icons name="razor-2" class="w-28" />
          </div>
          <div class="bg-pink-300 flex items-center justify-center aspect-square">
            <Icons name="razor-3" class="w-28" />
          </div>
          <div class="bg-green-200 flex items-center justify-center aspect-square">
            <Icons name="razor-4" class="w-28" />
          </div>
          <div class="bg-rose-400 flex items-center justify-center aspect-square">
            <Icons name="razor-5" class="w-28" />
          </div>
          <div class="bg-blue-200 flex items-center justify-center aspect-square">
            <Icons name="razor-6" class="w-28" />
          </div>
          <div class="bg-rose-200 flex items-center justify-center aspect-square">
            <Icons name="scissor-1" class="w-28" />
          </div>
          <div class="bg-teal-200 flex items-center justify-center aspect-square">
            <Icons name="scissor-2" class="w-28" />
          </div>
          <div class="bg-yellow-200 flex items-center justify-center aspect-square">
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
