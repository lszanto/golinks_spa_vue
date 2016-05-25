import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// grab vue resource
Vue.use(VueResource)

// setup vue defaults
Vue.http.options.emulateJSON = true

// if we have token
if (localStorage.getItem('ltk991')) Vue.http.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('ltk991')

/* eslint-disable no-new */
new Vue({
    el: 'body',

    data () {
        return {
            auth: false
        }
    },

    components: {
        App
    },

    methods: {
        updateAuth (token) {
            Vue.http.headers.common['Authorization'] = 'bearer ' + token
        }
    }
})
