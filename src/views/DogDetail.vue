<script>
  import dogs from '../data/dogs';
  export default {
      data() {
        return {
          dog: dogs?.find(dog => dog.id == this.$route.params.id)
        }
      }
  }
</script>
<template>
    <div class="card-detail">
      <div class="card-detail-image">
        <img :src="dog?.image" width="300" height="300">
      </div>
      <div class="card-detail-content">
        <p>Nombre: {{dog?.name}}</p>
        <hr>
        <p>Peso: {{dog?.weight}}</p>
        <hr>
        <p>Altura: {{dog?.height}}</p>
        <hr>
        <p>Expectativa de vida: {{dog?.life_span}}</p>
        <hr>
        <p>Temperamentos: {{dog?.temperaments?.join('-')}}</p>
        <hr>
      </div>
    </div>
</template>
<style scoped src="../assets/dog-detail.css"></style>