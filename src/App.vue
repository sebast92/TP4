<template>
  <div class="container-fluid mt-3 mx-3">
    <div class="jumbotron">
      <h1>Trabajo Practico 4</h1>
      <br>

      <Navbar />
      <router-view></router-view> 
<!--  <HttpClient />
      <Navbar />
      <router-view></router-view> -->

    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import HttpClient from './components/HttpClient.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {

}
</style>
