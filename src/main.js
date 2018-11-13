// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';

// eslint-disable-next-line
//import * as $rdf from 'rdflib';
// eslint-disable-next-line
//import * as auth from 'solid-auth-client';

import App from './App';
import router from './router';

// eslint-disable-next-line
//import './external/solid-file-client';

import { solid } from './mixins/solid.ts';
import { todo } from './mixins/todo.ts';

Vue.use(Vuetify);

Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

Vue.mixin(todo);

Vue.mixin(solid);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
