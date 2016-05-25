<template>
  <div class="link">
    <div class="top" >
        <h4>{{ link.Title }}</h4>
        <small>{{ link.CreatedAt }}</small>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Link',

    props: {
        link: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
    clear: both;
}

.top h4 {
    float: left;
    color: #42b983;
}

.top small {
    float: right;
    font-size: 12px;
    font-weight: bold;
}
</style>
