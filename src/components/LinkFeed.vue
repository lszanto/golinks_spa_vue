<template>
  <div class="link-feed">
    <ul>
        <link v-for="link in links" :link="link" >
    </ul>
    <button @click="showUs" >Show us</button>
  </div>
</template>

<script>
import Link from 'components/Link.vue'

export default {
    name: 'LinkFeed',

    components: {
        Link
    },

    props: {
        links: []
    },

    methods: {
        showUs () {
            console.log(this.links)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
