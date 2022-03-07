<script>
    export default {
        props: ['pages', 'currentPage'],
        methods: {
            currentPageChanged(page) {
                this.$emit('currentPageChanged', page)
            }
        }
    }
</script>
<template>
    <ul class="pagination">
        <li
            v-for="number in pages" 
            :key="number"
            @click="currentPageChanged(number)"
        >
            <a :class="[currentPage === number ? 'active' : '']">
                {{number}}
            </a>
        </li>
    </ul>
</template>
<style scoped src="../assets/dog-pagination.css"></style>