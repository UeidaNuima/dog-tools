import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Layout, Menu, Icon, Drawer } from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
