<script>
import axios from 'axios';
import { store } from '../store';
import HeaderSearchComponent from './HeaderSearchComponent.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        };
    },
    components: {
        HeaderSearchComponent,
    },
    methods: {
        search() {
            //call api to get movies and tv shows
            if (this.store.searchQuery !== '') {
                let movieURL = this.store.apiMovieDB.defaultURL + this.store.apiMovieDB.movie + this.store.apiMovieDB.apiKey + '&query=' + this.store.searchQuery;
                let tvURL = this.store.apiMovieDB.defaultURL + this.store.apiMovieDB.tv + this.store.apiMovieDB.apiKey + '&query=' + this.store.searchQuery;

                axios.get(movieURL)
                    .then((response) => {
                        this.store.searchResultsMovie = response.data.results;
                    })
                    .then(() => {
                        return axios.get(tvURL);
                    })
                    .then((response) => {
                        this.store.searchResultsTV = response.data.results;
                    });
            }
        },
    },
};
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="../assets/img/BoolFlix-logos_transparent.png" alt="Boolflix Logo" class="logo">
                <!-- disappears at md breakpoint -->
                <h2 class="text-white fw-bold d-none d-lg-block">Boolflix</h2>
            </div>
            <div>
                <HeaderSearchComponent @search="search"></HeaderSearchComponent>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

header {
    background-color: $color-secondary;
    color: white;
    padding: 10px 0;

    h2 {
        font-size: 2.5rem;
    }

    .logo {
        width: 100px;
    }
}
</style>