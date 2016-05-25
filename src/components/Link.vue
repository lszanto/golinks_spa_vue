<template>
  <div class="link" @click="viewLink(link)" >
    <div class="top" >
        <h4>{{ link.Title }}</h4>
        <small>created {{ link.CreatedAt }}</small>
    </div>

    <div class="link-body" >
        {{ link.URL }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'Link',

    props: {
        link: Object
    },

    methods: {
        viewLink (link) {
            window.open('http://localhost:3000/api/links/' + link.ID)
        }
    }
}
</script>
