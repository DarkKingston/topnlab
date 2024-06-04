import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from './Shared/Layout'
import VueDragscroll from "vue-dragscroll";
import VueTippy from 'vue-tippy'
import "tippy.js/dist/tippy.css";
InertiaProgress.init()

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
            .use(VueDragscroll)
            .mixin({ methods: {route: window.route}})
            .mount(el)
    },
})
