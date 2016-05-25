import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// grab vue resource
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
    el: 'body',

    components: {
        App
    }
})
