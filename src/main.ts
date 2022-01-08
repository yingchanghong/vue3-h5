import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/less/var.less';
import './assets/less/nomal.less';
createApp(App).use(router).mount('#app');
