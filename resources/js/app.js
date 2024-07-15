import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout'
import VueDragscroll from "vue-dragscroll";
import VueTippy from 'vue-tippy'
import vClickOutside from "click-outside-vue3"
import "tippy.js/dist/tippy.css";
import 'maz-ui/css/main.css'
import 'vue3-select/dist/vue3-select.css';
import { createPinia } from 'pinia'
InertiaProgress.init()
const pinia = createPinia()
createInertiaApp({
    resolve: name => {
        const page = require(`./Pages/${name}`).default;
        page.layout = page.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueTippy)
            .use(vClickOutside)
            .use(pinia)
            .use(VueDragscroll)
            .mixin({ methods: {route: window.route}})
            .mount(el)
    },
})
