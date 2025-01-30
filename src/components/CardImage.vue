<template>
    <div class="drone__media container p-0 mx-auto mt-0 mb-5">
        <h1 class="text-start p-5 mt-5">Media</h1>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner rounded-1">
                <div class="carousel-item active">
                    <img src="../assets/Immagine_01.png" class="d-block w-100" alt="" loading="lazy">
                </div>
                <div v-for="(photo, index) in mediaList" :key="index" class="carousel-item">
                    <img :src="photo.img" class="d-block w-100" alt="" loading="lazy">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Indietro</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Avanti</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardImage',
    data() {
        return {
            mediaList: [
                {
                    id: 0,
                    img: require("../assets/Ricostruzione incidente-1.png")
                },
                {
                    id: 1,
                    img: require("../assets/Ricostruzione incidente AUTO MOTO-1.png")
                },
                {
                    id: 2,
                    img: require("../assets/Immagine_01.png")
                },
                {
                    id: 3,
                    img: require("../assets/Immagine_02.png")
                },
                {
                    id: 4,
                    img: require("../assets/Immagine_03.png")
                },
                {
                    id: 5,
                    img: require("../assets/Immagine_04.png")
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.drone__media {
    margin-top: 180px;
    padding: 0 130px;

        @media screen and (max-width: 1399px) {
            display: flex;
            flex-direction: column;
        }

        .aspect-ratio {
            aspect-ratio: 3 / 2;
            object-fit: cover;
            width: 100%;
            height: 50vh;

            @media screen and (max-width: 444px) {
                width: 100%;
                height: 50vh;
                object-fit: scale-down;
            }
        }

        video {

            @media screen and (max-width: 444px) {
                width: 330px;
            }
        }

        p {
            padding: 3px 30px;
            border-left: 4px solid #a7a7a7;
            font-weight: 100;
        }

        img {
            object-fit: cover;
            height: 450px;
        }
}
</style>