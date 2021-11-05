import { createApp } from 'vue'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import App from './App.vue'
import './registerServiceWorker'
import { router } from './router'
import { Quasar } from 'quasar'

createApp(App).use(Quasar, {
    config: {},
    brand: {
        primary: '#333',
    },
}).use(router).mount('#app')
