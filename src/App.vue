<template>
  <div id="app">
    <link-feed :links="links" ></link-feed>
    <button @click="sayHi" >Say hello</button>
  </div>
</template>

<script>
import LinkFeed from 'components/LinkFeed.vue'

export default {
    components: {
        LinkFeed
    },

    data () {
        return {
            links: []
        }
    },

    methods: {
        sayHi () {
            console.log(this.links)
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

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

</style>
