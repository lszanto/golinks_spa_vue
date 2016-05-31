<template>
    <div id="app">
        <div class="header" >
            <h1 class="logo" >.links</h1>
        </div>

        <div class="wrapper" >
            <link-add></link-add>
            <link-feed :links="links" ></link-feed>
        </div>
    </div>
</template>

<script>
import LinkFeed from 'components/LinkFeed.vue'
import LinkAdd from 'components/LinkAdd.vue'

export default {
    components: {
        LinkFeed,
        LinkAdd
    },

    data () {
        return {
            links: []
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
