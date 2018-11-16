// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';

import colors from 'vuetify/lib/util/colors';

import App from './App';
import router from './router';

import { solid } from './mixins/solid.ts';
import { todo } from './mixins/todo.ts';
import { settings } from './mixins/settings.ts';

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1,
    secondary: colors.green.lighten4,
    accent: colors.blue.base,
  },
});

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

Vue.mixin(settings);
Vue.mixin(solid);
Vue.mixin(todo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
