import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// grab vue resource
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
    el: 'body',

    http: {
        root: ''
    },

    components: {
        App
    },

    created () {
        this.$http.get('http://localhost:3000/api/links').then(function (response) {
            return response.data
        }).then(function (json) {
            console.log(json)
        })
    }
})
