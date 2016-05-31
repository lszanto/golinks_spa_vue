<template>
  <div class="link-add">
    <form class="add-form" >
        <div class="thum-chooser" v-if="showImages" >
            Image: {{ imageIndex }}

            <img v-bind:src="thumbnail" alt="thumbnail" v-bind:width="imageWidth" v-bind:height="imageHeight" class="thumb" id="thumb" />
            <button type="button" @click="previousImage" ><</button>
            <button type="button" @click="nextImage" >></button>
        </div>

        <label for="title" >Title</label>
            <input type="text" name="title" v-model="title" />

        <label for="url" >URL</label>
            <input type="text" name="url" v-on:change="checkURL" v-model="url" />
    </form>
  </div>
</template>

<script>
export default {
    name: 'LinkAdd',

    data: function () {
        return {
            title: '',
            url: '',
            thumbnail: '',
            images: [],
            imageIndex: 0,
            imageWidth: 100,
            imageHeight: 100,
            maxWidth: 100,
            maxHeight: 100,
            showImages: false
        }
    },

    methods: {
        checkURL: function () {
            // grab images
            this.$http.post('http://localhost:3000/util/list_images', { 'url': this.url }).then(function (response) {
                return response.data
            }).then(function (json) {
                // set recieved images
                this.$set('images', json)

                // load images
                this.loadImages()

                // reset image index
                this.$set('imageIndex', 0)

                // update images
                this.updateImages()
            })
        },

        loadImages: function () {
            // loader
            var loader = []

            // loop through images
            for (var i = 0; i < this.images.length; i++) {
                // create new image
                loader[i] = new Image()

                // set src
                loader[i].src = this.images[i]
            }
        },

        updateImages: function () {
            // if we have an image display it
            if (this.images.length > 0) {
                this.showImages = true
                this.thumbnail = this.images[this.imageIndex]

                // recalculate size
                this.recalculateSize()
            } else this.showImages = false
        },

        recalculateSize: function () {
            // grab variables
            var id = document.getElementById('thumb')
            var ratio = 0
            var width = id.naturalWidth
            var height = id.naturalHeight

            // check if too wide
            if (width > this.maxWidth) {
                ratio = this.maxWidth / width
                this.imageWidth = this.maxWidth
                this.imageHeight = height * ratio
                width = width * ratio
                height = this.imageHeight
            }

            // check now if it's too high
            if (height > this.maxHeight) {
                ratio = this.maxHeight / height
                this.imageHeight = this.maxHeight
                this.imageWidth = width * ratio
            }
        },

        previousImage: function () {
            if (this.imageIndex > 0) this.imageIndex--
            else if (this.imageIndex === 0) this.imageIndex = (this.images.length - 1)
            this.updateImages()
        },

        nextImage: function () {
            if (this.imageIndex < (this.images.length - 1)) this.imageIndex++
            else if (this.imageIndex === (this.images.length - 1)) this.imageIndex = 0
            this.updateImages()
        }
    }
}
</script>
