<template>
  <div id="app">
    <strong>{{ friend }}</strong>
    <button @click="sayHi" >Say Hello</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            friend: 'hillo'
        }
    },

    methods: {
        sayHi () {
            alert('hi mate')
        }
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
