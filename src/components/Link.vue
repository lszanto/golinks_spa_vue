<template>
  <div class="link" >
    <div class="top" >
        <h4>{{ link.Title }}</h4>
        <small>created {{ link.CreatedAt }} <button @click="removeLink(link)" >X</button></small>
    </div>

    <div class="link-body" >
        {{ link.URL }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'Link',

    data () {
        return {
            resource: this.$resource('http://localhost:3000/api/links/{id}')
        }
    },

    props: {
        link: Object
    },

    methods: {
        viewLink (link) {
            window.open('http://localhost:3000/api/links/' + link.ID)
        },

        removeLink (link) {
            // confirm with user
            if (!confirm('Are you sure you want to delete this link? This cannot be undone')) return

            // chuck an actual delete out there
            this.resource.delete({ id: link.ID })

            // remove the link visually
            this.$parent.links.$remove(link)
        }
    }
}
</script>
