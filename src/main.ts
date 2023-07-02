import { createApp } from 'vue'

import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from '@/App.vue'
import Container from '@/components/Container.vue';
import Copyable from '@/components/Copyable.vue';
import Revealer from '@/components/Revealer.vue';

library.add( faCopy );

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Container', Container);
app.component('Copyable', Copyable);
app.component('Revealer', Revealer);
app.mount('#app');
