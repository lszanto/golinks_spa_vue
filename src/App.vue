<template>
    <div id="app">
        <div class="header" >
            <h1 class="logo" >.links</h1>
        </div>

        <div class="wrapper" >
            <link-feed :links="links" ></link-feed>
            <button @click="runAuth" >Run Auth</button>
            <button @click="checkAuth" >Check Auth</button>
        </div>
    </div>
</template>

<script>
import LinkFeed from 'components/LinkFeed.vue'
import Lauth from './lauth.js'

export default {
    components: {
        LinkFeed
    },

    data () {
        return {
            links: [],
            auth: new Lauth()
        }
    },

    methods: {
        runAuth () {
            this.$http.post('http://localhost:3000/api/user/login', { username: 'luke', password: 'cool' }).then(function (response) {
                return response.data
            }).then(function (json) {
                localStorage.setItem('ltk991', json.token)
                this.$parent.updateAuth(json.token)
            }.bind(this))
        },

        checkAuth () {
            this.$http.delete('http://localhost:3000/api/links/3', {}, { headers: this.auth.getAuthHeaders() }).then(function (response) {
                console.log(response)
            })
        }
    },

    created () {
        this.$http.get('http://localhost:3000/api/links').then(function (response) {
            return response.data
        }).then(function (json) {
            this.links = json
        }.bind(this))
    }
}
</script>
