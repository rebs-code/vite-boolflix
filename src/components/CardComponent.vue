<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
            maxVote: 5,
        };
    },
    props: {
        item: {
            type: Object,
        },
    },
    computed: {
        cutOverview() {
            //adjusted to ut mpore chars on smaller screens
            if (this.item.overview.length > 200) {
                if (window.innerWidth <= 992) {
                    return this.item.overview.slice(0, 70).trim() + '...';
                } else if (window.innerWidth <= 1200) {
                    return this.item.overview.slice(0, 100).trim() + '...';
                }
                else {
                    return this.item.overview.slice(0, 200).trim() + '...';
                }
            } else {
                return this.item.overview;
            }
        }
    }
};

</script>
<template>
    <li>
        <div class="image-cover">
            <img class="cover" v-if="item.poster_path" :src="store.apiMovieDB.imgURL + item.poster_path">
            <img class="cover" v-else src="../assets/img/poster-placeholder.png">
        </div>
        <!-- info div -->
        <div class="info p-4">
            <h3> <span class="fw-bold">Title:</span> {{ item.title || item.name }}</h3>
            <!-- hide original title on smaller displays -->
            <h4 class="d-none d-lg-block"><span class="fw-bold">Original Title:</span> {{ item.original_title ||
                item.original_name
            }}
            </h4>
            <!-- original language div -->
            <div>
                <span class="me-1 fw-bold">Original Language:</span>
                <img v-if="item.original_language === 'en'" src="https://flagsapi.com/GB/flat/64.png" class="lang-flag" />
                <img v-else-if="item.original_language === 'it'" src="https://flagsapi.com/IT/flat/64.png"
                    class="lang-flag" />
                <p v-else class="text-uppercase">{{ item.original_language }}</p>
            </div>
            <!-- div for vote -->
            <div>
                <span>Vote: </span>
                <span v-for="n in Math.round(this.item.vote_average / 2)"><font-awesome-icon icon="fa-solid fa-star"
                        class="primary-color"></font-awesome-icon></span>
                <span v-for="n in Math.round(maxVote - (this.item.vote_average / 2))"><font-awesome-icon
                        icon="fa-regular fa-star" class="primary-color"></font-awesome-icon></span>
            </div>
            <!-- overview div shows only above md-->
            <div class="mt-3 d-none d-md-block">
                <span class="fw-bold">Overview:</span>
                <p>{{ cutOverview }}</p>
            </div>
        </div>


    </li>
</template>
<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

li {
    width: calc(100% / 3 - 20px);
    padding: 10px;
    border: 1px solid $color-primary;
    border-radius: 5px;
    background-color: $color-secondary;
    box-shadow: 0 0 10px $color-primary;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    .image-cover {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.1);

        .image-cover {
            display: none;
        }

        .info {
            display: block;
            border: $color-primary 1px solid;
        }
    }

    .cover {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid $color-primary;
    }

    .info {
        display: none;
        height: 100%;
        border-radius: 5px;
        background-color: white;

        .lang-flag {
            width: 30px;
            height: 30px;
        }

        @media (max-width: 1400px) {
            font-size: 0.8rem;

            h3,
            h4 {
                font-size: 1rem;
            }
        }

        @media (max-width: 1200px) {

            font-size: 0.8rem;

            h3,
            h4 {
                font-size: 0.8rem;
            }
        }


        @media (max-width: 992px) {
            font-size: 0.5rem;

            h3,
            h4 {
                font-size: 0.7rem;
            }

            .lang-flag {
                width: 20px;
                height: 20px;
            }
        }

        @media (max-width: 768px) {

            h3,
            h4 {
                font-size: 0.5rem;
            }

            .lang-flag {
                width: 15px;
                height: 15px;
            }
        }
    }


}
</style>


