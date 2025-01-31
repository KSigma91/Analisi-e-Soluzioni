import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

import Home from './pages/PageHome.vue'
import Service from './pages/PageService.vue'
import Tool from './pages/PageTool.vue'
import Gallery from './pages/PageGallery.vue'
import About from './pages/PageAbout.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/service',
        name: 'service',
        component: Service
    },
    {
        path: '/tool',
        name: 'tool',
        component: Tool
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

const router = new VueRouter ({
    routes,
    mode: 'hash',
    base: process.env.BASE_URL,
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             gsap.to(window, { scrollTo: savedPosition ? savedPosition.y : 0, duration: 1.2, ease: 'power2.out'});
    //             resolve();
    //         }, 300); // Ritardo per una transizione più naturale
    //     });
    // }
    // scrollBehavior() {
    //     gsap.to(window, {
    //         duration: 1,
    //         scrollTo: { y : 0, autoKill: false },
    //         ease: 'power2.out'
    //     });
    //     return { x: 0, y : 1};
    // }
    scrollBehavior(savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0, autoKill: false }, // Scorri verso l'alto
                ease: 'power2.out' // Easing per un'animazione fluida
            });
            return { x: 0, y: 0 };
        }
    } 
});

export default router;

Vue.use(VueRouter)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue ({
    render: h => h(App),
    router
}).$mount('#app')