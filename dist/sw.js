if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),t={module:{uri:a},exports:l,require:o};s[a]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/_...all_.fe29d52a.js",revision:null},{url:"assets/404.2a8c8db8.js",revision:null},{url:"assets/app.1803ef8a.css",revision:null},{url:"assets/app.bee4052f.js",revision:null},{url:"assets/other-page.b95c7f87.js",revision:null},{url:"assets/vendor.6870244c.js",revision:null},{url:"assets/virtual_pwa-register.97d50b09.js",revision:null},{url:"index.html",revision:"f230e343b874776de0b37b250585fbfa"},{url:"other-page.html",revision:"82985e0c0ac8d73b98c0eeaa3395a1fe"},{url:"favicon-16x16.png",revision:"5bbe655eb05078faacd83e6bab25529e"},{url:"favicon-32x32.png",revision:"e409936358d5b4d9f12edd7e0c0c35a6"},{url:"favicon.ico",revision:"240f91710d3c646f38479ddba77e8dc3"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"2ddda202e3360b4fe7b129a4b315e3a6"},{url:"pwa-192x192.png",revision:"5dba71281213d5c947a4a870e46e7e7f"},{url:"pwa-512x512.png",revision:"74c0a838cc786ecebdd78b0ba011daa4"},{url:"manifest.webmanifest",revision:"a949af58d0ba96def26b8b0675993f2e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));