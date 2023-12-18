<script>
import { store } from '../store';
export default {
    name: 'HeaderSearchComponent',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div>
        <form class="d-flex">
            <div class="pe-3">
                <input type="text" class="form-control" id="search" v-model="store.searchQuery">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="$emit('search')">Search</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

form {
    width: 100%;
    align-items: center;

    button {
        width: 100px;
        background-color: $color-primary;
        border: none;
    }
}

#search {
    width: 400px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
}
</style>