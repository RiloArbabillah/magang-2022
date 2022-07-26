<script setup lang="ts">
import { useStore } from "@/store";
import VitailseLogo from "@/assets/logo.png";
import UserImage from "@/assets/users.png";

useHead({
  title: "Magang Vue 2022",
});

const store = useStore();
const { t } = useI18n();
const bgList = [
  "bg-slate-400 text-black",
  "bg-slate-500 text-white",
  "bg-gray-400 text-black",
  "bg-gray-500 text-white",
  "bg-zinc-400 text-black",
  "bg-zinc-500 text-white",
  "bg-neutral-400 text-black",
  "bg-neutral-500 text-white",
  "bg-stone-400 text-black",
  "bg-stone-500 text-white",
  "bg-red-400 text-white",
  "bg-red-500 text-white",
  "bg-orange-400 text-black",
  "bg-orange-500 text-white",
  "bg-amber-400 text-black",
  "bg-amber-500 text-black",
  "bg-yellow-400 text-black",
  "bg-yellow-500 text-black",
  "bg-lime-400 text-black",
  "bg-lime-500 text-black",
  "bg-green-400 text-black",
  "bg-green-500 text-black",
  "bg-emerald-400 text-black",
  "bg-emerald-500 text-black",
  "bg-teal-400 text-black",
  "bg-teal-500 text-black",
  "bg-cyan-400 text-black",
  "bg-cyan-500 text-black",
  "bg-sky-400 text-black",
  "bg-sky-500 text-black",
  "bg-blue-400 text-black",
  "bg-blue-500 text-white",
  "bg-indigo-400 text-black",
  "bg-indigo-500 text-white",
  "bg-violet-400 text-black",
  "bg-violet-500 text-white",
  "bg-purple-400 text-black",
  "bg-purple-500 text-white",
  "bg-fuchsia-400 text-black",
  "bg-fuchsia-500 text-white",
  "bg-pink-400 text-white",
  "bg-pink-500 text-white",
  "bg-rose-400 text-white",
  "bg-rose-500 text-white",
];

const tryParse = (array) => {
  return array.join(" ");
};

const random = () => {
  return Math.floor(Math.random() * bgList.length);
};
</script>

<template>
  <div class="grid place-items-center min-h-[80vh] py-10">
    <div class="max-w-2xl p-10 border border-gray-600 rounded-md">
      <div :class="tryParse(bgList)"></div>

      <div class="grid text-center place-items-center gap-3">
        <img :src="UserImage" width="300" class="mx-auto" />
        <h1 class="uppercase font-bold text-xl mt-10">Profile</h1>
        <div class="text-sm text-justify grid grid-cols-2">
          <p class="text-right">Nama :</p>
          <p>&nbsp;Rilo Arbabillah</p>
          <p class="text-right">TTL :</p>
          <p>&nbsp;Samarinda, 2x-xx-xx</p>
          <p class="text-right">Agama :</p>
          <p>&nbsp;Islam</p>
          <p class="text-right">Jenis Kelamin :</p>
          <p>&nbsp;Laki-Laki</p>
        </div>
      </div>
      <div class="text-center mt-10 grid gap-3">
        <h1 class="uppercase font-bold text-xl">About</h1>
        <p class="text-sm text-justify">
          “The body is but a vessel for the soul, a puppet which bends to the soul's
          tyranny. And lo, the body is not eternal, for it must feed on the flesh of
          others, lest it return to the dust from whence it came. Therefore must the soul
          deceive, despise and murder men.”
        </p>
        <p class="text-sm text-justify">― A.J. Durai</p>
      </div>
      <div class="grid text-center place-items-center mt-10 gap-3">
        <h1 class="uppercase font-bold text-xl">Contact</h1>
        <div class="text-sm text-center grid">
          <p>Email : rilo.arbabillah@gmail.com</p>
          <a
            href="https://github.com/RiloArbabillah"
            target="_blank"
            class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-bold"
            >Github</a
          >
        </div>
      </div>
      <div class="text-center mt-10 place-items-center grid gap-3">
        <h1 class="uppercase font-bold text-xl">Hobby</h1>
        <ul class="text-sm text-left grid">
          <li>• Swimming</li>
          <li>• Gaming</li>
          <li>• Reading</li>
          <!-- <li>• Programming</li> -->
        </ul>
      </div>
      <div class="text-center mt-10 place-items-center grid gap-3">
        <h1 class="uppercase font-bold text-xl">Skill</h1>
        <ul class="text-sm text-left grid">
          <li>• PHP (Laravel)</li>
          <li>• JS (Vuejs)</li>
          <li>• C++</li>
          <li>• C#</li>
          <li>• Python</li>
          <li>• SQL</li>
          <li>• VB</li>
          <li>• CSS (Tailwind)</li>
        </ul>
      </div>
      <div class="text-center mt-10 place-items-center grid gap-3">
        <h1 class="uppercase font-bold text-xl">Education</h1>
        <ul class="text-sm text-left grid">
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/Elementary+School+001+Palaran/@-0.5680307,117.1774899,17z/data=!3m1!4b1!4m5!3m4!1s0x2df42a874b8aa0f7:0x406a0440b298ad70!8m2!3d-0.5680361!4d117.1796786"
            >
              SDN 001 Palaran
            </a>
          </li>
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/SDN+005+Loa+Pari/@-0.3764005,116.9908171,17z/data=!3m1!4b1!4m5!3m4!1s0x2df670258dde7a47:0xbad98733290746b9!8m2!3d-0.376406!4d116.993007"
            >
              SDN 005 Tenggarong Seberang
            </a>
          </li>
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/MTs+nurul+islam/@-0.5633235,117.1801627,17z/data=!3m1!4b1!4m5!3m4!1s0x2df42a85cbce1cbb:0xc26c90922b7601c0!8m2!3d-0.5633289!4d117.1823514"
            >
              MTS Nurul Islam Palaran
            </a>
          </li>
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/Sekolah+Menengah+Kejuruan+Negeri+11/@-0.5547113,117.1476235,17z/data=!3m1!4b1!4m5!3m4!1s0x2df6804083976ddd:0xc126d7eaa022535d!8m2!3d-0.5550357!4d117.149716"
            >
              SMKN 11 Samarinda
            </a>
          </li>
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/Sekolah+Menengah+Kejuruan+Negeri+11/@-0.5547113,117.1476235,17z/data=!3m1!4b1!4m5!3m4!1s0x2df6804083976ddd:0xc126d7eaa022535d!8m2!3d-0.5550357!4d117.149716"
            >
              SMKN 11 Samarinda
            </a>
          </li>
          <li>
            •
            <a
              class="after:content-['_↗'] text-blue-500 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
              target="_blank"
              href="https://www.google.com/maps/place/Politeknik+Negeri+Samarinda/@-0.5332684,117.1216437,17z/data=!3m1!4b1!4m5!3m4!1s0x2df67f4bc56ac1f5:0x6cc39448081e9f18!8m2!3d-0.5332738!4d117.1238324"
            >
              Politeknik Negeri Samarinda
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-2xl w-full grid grid-flow-row grid-cols-3 gap-5 mt-10 pt-10 border-t border-gray-800 dark:border-gray-300">
      <router-link
        :to="{ name: 'jurnal' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Halaman Jurnal Harian</router-link
      >
      <router-link
        :to="{ name: 'todo-list' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Halaman Todo List</router-link
      >
      <router-link
        :to="{ name: 'tutorial' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Halaman Tutorial</router-link
      >
      <router-link
        :to="{ name: 'kalkulator' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Halaman Kalkulator</router-link
      >
      <router-link
        :to="{ name: 'kalkulator2' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Halaman Kalkulator 2</router-link
      >
      <router-link
        :to="{ name: 'color-switcher' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Color Switcher</router-link
      >
      <router-link
        :to="{ name: 'rng' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        >Random Number Generator</router-link
      >
      <router-link
        :to="{ name: 'pyramid' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center items-center justify-center flex hover:invert dark:hover:invert hover:underline"
        >Pyramid Generator</router-link
      >
      <router-link
        :to="{ name: 'rdn' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center items-center justify-center flex hover:invert dark:hover:invert hover:underline"
        >Remove Duplicate Number</router-link
      >
      <router-link
        :to="{ name: 'tugas-desain' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center items-center justify-center flex hover:invert dark:hover:invert hover:underline"
        >Tugas Desain</router-link
      >
      <router-link
        :to="{ name: 'desain-test' }"
        :class="bgList[random()]"
        class="px-4 py-3 rounded-md text-center items-center justify-center flex hover:invert dark:hover:invert hover:underline"
        >Test Desain</router-link
      >
    </div>
    <div class="max-w-2xl w-full grid grid-flow-row grid-cols-3 gap-5 mt-10 pt-10 border-t border-gray-800 dark:border-gray-300">
      <a
				:class="bgList[random()]"
        class="after:content-['_↗'] px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        target="_blank"
        href="https://magang-khadafi.netlify.app/"
      >
        Khadafi
      </a>
      <a
				:class="bgList[random()]"
        class="after:content-['_↗'] px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        target="_blank"
        href="https://magang-auni.netlify.app/"
      >
        Auni
      </a>
      <a
				:class="bgList[random()]"
        class="after:content-['_↗'] px-4 py-3 rounded-md text-center hover:invert dark:hover:invert hover:underline"
        target="_blank"
        href="https://magang-rafi.netlify.app/"
      >
        Rafi
      </a>
    </div>
    <div class="max-w-2xl w-full grid grid-flow-row grid-cols-3 gap-5 mt-10 pt-10 border-t border-gray-800 dark:border-gray-300">
      <router-link
        :to="{ name: 'nilai' }"
        class="col-span-3 px-4 py-3 rounded-md text-center items-center justify-center flex bg-red-500 text-white font-bold text-lg hover:bg-red-800"
        >Nilai</router-link
      >
    </div>
  </div>
</template>

<route lang="yaml">
name: home
</route>
