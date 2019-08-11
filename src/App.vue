<template>
  <div id="app">
      <PolicyComponent/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PolicyComponent from './components/PolicyComponent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    PolicyComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
