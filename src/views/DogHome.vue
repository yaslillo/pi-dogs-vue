<script setup>
  import DogPagination from '../components/DogPagination.vue';
  import DogCard from '../components/DogCard.vue';
  import dogs from '../data/dogs';
</script>

<template>
  <div class="grid">
    <DogCard 
      v-for="dog in dogs.filter((dog, index) => {
        if(index >= (amountOfDogsToShow * currentPage - amountOfDogsToShow) && index < (amountOfDogsToShow * currentPage)) {
          return dog;
        }
      })" 
      :key="dog.id"
      :dog="dog"
    />
  </div>
  <div class="main-footer">
    <DogPagination @currentPageChanged="handleCurrentPage" :currentPage="currentPage" :pages="Math.ceil(dogs.length / amountOfDogsToShow) || 1"/>
  </div>
</template>

<style scoped src="../assets/dog-home.css"></style>
<script>
export default {
  data() {
    return {
      dogs,
      amountOfDogsToShow: 9,
      currentPage: 1,
    }
  },
  methods: {
    handleCurrentPage(event) {
      this.currentPage = event;
    }
  },
}
</script>
