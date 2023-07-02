import { createApp } from 'vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import Copyable from './components/Copyable.vue';
import Revealer from './components/Revealer.vue';

library.add( faCopy );

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('copyable', Copyable);
app.component('revealer', Revealer);
app.mount('#app');
