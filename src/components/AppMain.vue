<script>
import MainCardList from './MainCardList.vue';
export default {
    name: 'AppMain',
    components: {
        MainCardList,
    },
};
</script>

<template>
    <div class="container">
        <MainCardList></MainCardList>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

.lele {
    background-color: $color-secondary;
    color: white;
    text-align: center;
}
</style>