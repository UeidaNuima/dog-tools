import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Checkbox,
  Input,
  InputNumber,
} from 'ant-design-vue';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Checkbox);
Vue.use(Input);
Vue.use(InputNumber);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
