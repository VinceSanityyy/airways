/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter)

import VueRouter from 'vue-router'
import Vue from 'vue'

//vform package
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const routes = [
    { path: '/reservation', component: require('./components/Reservation/Reservation.vue').default },

  ]

const router = new VueRouter({
    mode: 'history',
    routes
  })



const app = new Vue({
    el: '#app',
    router
});
