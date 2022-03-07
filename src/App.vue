<script setup>
  import DogNavBar from './components/DogNavBar.vue';
</script>

<template>
  <div class="wrapper">
    <div class="main-nav">
      <DogNavBar />
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style src="./assets/reset.css"></style>
<style src="./assets/app.css"></style>
<style src="./assets/layout.css"></style>