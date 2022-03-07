<script>
    export default {
        props: ['dog']
    }
</script>
<template>
    <div class="card">
        <router-link :to="{name: 'dog-detail', params: {id: dog?.id}, props: { dog: dog }}">
            <img :src="dog?.image" height="300">
            <div class="text-centered container">
                <h4><b>{{dog?.name}}</b></h4> 
            </div>
        </router-link>
    </div>
</template>
<style scoped src="../assets/dog-card.css"></style>