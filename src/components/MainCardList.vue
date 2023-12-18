<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'MainCardList',
    data() {
        return {
            store,
        };
    },
    components: {
        CardComponent,
    },
};
</script>

<template>
    <div>
        <ul>
            <card-component v-for="movie in store.searchResultsMovie" :item="movie" class="card-component"></card-component>
            <card-component v-for="show in store.searchResultsTV" :item="show" class="card-component"></card-component>
        </ul>

    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-component {
    margin: 10px;
}
</style>