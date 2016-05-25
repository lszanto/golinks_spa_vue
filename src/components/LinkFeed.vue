<template>
  <div class="link-feed">
    <ul>
        <link v-for="link in links" :link="link" >
    </ul>
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
