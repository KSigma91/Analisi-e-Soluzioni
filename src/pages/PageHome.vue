<template>
    <div>
        <div id="jumbotron" class="position-relative">
            <div class="d-flex">
                <video width="100%" preload="metadata" autoplay loop plays-inline>
                    <source src="../assets/Eaglelabloop Site.mp4" type="video/mp4">
                </video>
            </div>
            <div class="position-absolute top-50 start-50 translate-middle text-white">
                <p class="fs-2">
                    Non hai visto un albero finchè non hai visto la sua ombra dal cielo
                </p>
                <hr class="m-auto my-2 opacity-100">
                <small class="fs-5">Amelia Earhart</small>
            </div>
            <!-- <div class="container-fluid h-25"></div> -->
            <div id="gradient"></div>
        </div>
        <div class="tools__container d-flex justify-content-center justify-content-md-center justify-content-lg-start align-items-center">
            <div class="tools__items d-flex flex-column align-items-md-center align-items-lg-start gap-3 text-start text-white lh-base">
                <h1>
                    Droni all'avanguardia
                </h1>
                <p class="fs-4">
                    per svolgere al meglio attività di rilievo, ispezioni, fotogrammetria e servizi fotografici
                </p>
                <router-link to="/tool" class="btn btn-outline-warning btn-block px-4 py-2 rounded-1 border border-warning border-2 text-light fs-5 fw-light">Scopri di più</router-link>
            </div>
        </div>
        <div class="pilot__container d-flex justify-content-center justify-content-md-center justify-content-lg-end align-items-center">
            <div class="pilot__items d-flex flex-column align-items-md-center align-items-lg-start gap-3 text-start text-white lh-base">
                <h1>
                    Piloti APR certificati
                </h1>
                <p class="fs-4">
                    Svolgiamo attività specializzate in situazioni critiche
                </p>
                <router-link to="/service" class="btn btn-outline-warning btn-block px-4 py-2 rounded-1 border border-warning border-2 text-white fs-5 fw-light">Scopri di più</router-link>
            </div>
        </div>
        <div class="container mt-5">
            <h1 class="text-start p-5 mt-4">I nostri servizi</h1>
            <div class="services__container d-flex flex-wrap justify-content-center align-items-center gap-4 text-white">
                <div v-for="(service, index) in serviceList" :key="index" class="services__image position-relative d-flex flex-column bg-dark animate__animated animate__backInUp shadow-sm rounded-1">
                    <img :src="service.img" :alt="service.title" class="img-fluid opacity-50 shadow" loading="lazy">
                    <div class="services__text position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-start align-items-center p-5 w-100">
                        <h2 class="lh-lg">{{ service.title }}</h2>
                        <p class="fs-5">{{ service.desc }}</p>
                        <a href="/service" class="fs-5 text-white animate__animated animate__bounceInLeft"><i class="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Evento Infortunistica Stradale "Analisi e Soluzioni" -->
         <div class="container mt-5">
            <h1 class="text-start p-5 mt-4">Infortunistica Stradale "Analisi e Soluzioni"</h1>
            <div class="d-flex flex-wrap justify-content-center gap-4 mb-5">
                <div v-for="card in cardList" :key="card" class="event__media">
                    <!-- <a :href="card.photo">
                        <img class="img-fluid rounded-1" :src="card.photo" :alt="card.desc"
                        />
                    </a> -->
                    <video preload="metadata" autoplay loop plays-inline :src="card.video" class="w-100" style="height: 600px"></video>
                </div>
                <p class="fs-5">Il 16 Dicembre 2023 si è tenuto presso Best Western Plus Leone di Messapia 
                    Hotel & Conference di Lecce, un evento dedicato all'infortunistica stradale...</p>
            </div>
         </div>
        <!--  -->
        <!-- TODO: area sponsor se presente -->
        <!--  -->
    </div>
</template>

<script>
export default {
    name: 'PageHome',
    data() {
        return {
            serviceList: [
                {
                    img: require("../assets/DJI_0155-Pano.jpg"),
                    title: "Riprese aeree",
                    desc: "Acquisizione immagini e riprese mediante l'utilizzo del drone"
                },
                {
                    img: require("../assets/3D2D.jpg"),
                    title: "Ricostruzione 2D e 3D",
                    desc: "Ricostruzione modelli grafici grazie ai software odierni"
                },
                {
                    img: require("../assets/Consulting.jpg"),
                    title: "Consulenze tecniche",
                    desc: "Consulto tecnico per infortunistica stradale"
                }
            ],
            cardList: [
                {
                    id: 0,
                    video: require('../assets/Web 02.mp4'),
                    photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                    desc: "lorem"
                },
                // {
                //     id: 1,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 2,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 3,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 4,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 5,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 6,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 7,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // },
                // {
                //     id: 8,
                //     photo: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
                //     desc: "lorem"
                // }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#jumbotron {

    video {
        //width: 100%;
        height: 90vh;
        object-fit: cover;
        image-rendering:pixelated;
        //object-position: top;

        @media screen and (max-width: 768px) {
            height: 70vh;
        }
    }

    hr {
        width: 45px;
        border: 1px solid #f5bc41;
    }

    #gradient {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 600;
        width: 100%;
        height: 200px;
        background: url(../assets/gradient.png);
        background-size: cover;
    }
}

.tools__container {
    height: 70vh;
    background-color: #2E2E37;
    background-image: url(../assets/mavic.png);
    background-position: bottom 200px left 800px;
    background-size: 55%;
    background-repeat: no-repeat;

    @media screen and (max-width: 849px) {
        height: 40vh;
        background-position: top left 300px;
        background-size: cover;
    }

    @media screen and (max-width: 575px) {
        height: 60vh;
        background-position: top left;
        background-size: cover;
    }

    .tools__items {
        margin: 0 100px;

        h2 {
            color: #f5bc41;
        }

        p {
            padding: 3px 30px;
            border-left: 4px solid #fff;
            font-weight: 100;

            @media screen and (max-width: 849px) {
                padding: 0;
                border-left: none;
            }

            @media screen and (max-width: 575px) {
                padding: 0;
                border-left: none;
            }
        }
    }
}

.pilot__container {
    height: 70vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .7)), url('../assets/drone-6826187_1920.jpg');
    background-position: right;

    @media screen and (max-width: 849px) {
        height: 40vh;
        background-image: cover;
        background-position: right;
    }

    @media screen and (max-width: 575px) {
        height: 60vh;
        background-image: cover;
        background-position: top;
    }

    .pilot__items {
        margin: 0 100px;

        p {
            padding: 3px 30px;
            border-left: 4px solid #f5bc41;
            font-weight: 100;

            @media screen and (max-width: 849px) {
                padding: 0;
                border-left: none;
            }

            @media screen and (max-width: 575px) {
                padding: 0;
                border-left: none;
            }
        }
    }
}

.services__container {

    .services__image {
        overflow: hidden;

        img {
            width: 400px;
            height: 450px;
            object-fit: cover;

            &:hover {
                transform: scale(1.5);
                filter: grayscale(90%);
                transition: all 2s linear;
            }

            &:not(:hover) {
                transform: scale(1);
                transition: all 1.5s ease-in-out;
            }
        }

        .services__text {

            h2 {
                color: #f5bc41;
                font-weight: 500;
            }

            p {
                font-weight: 400;
            }

            a {
                animation-delay: .5s;
            }
        }
    }
}

.event__media {

    img {
        width: 350px;
        height: 280px;

        &:hover {
            box-shadow: 0 6px 10px #a7a7a7;
            opacity: 70%;
            transform: scale(1.03);
            transition: all .3s ease-in-out;
        }

        &:not(:hover) {
            transform: scale(1);
            transition: all .3s ease-in-out;
        }
    }

    video {
        // max-width: 100%;
        object-fit: cover;
    }
}
</style>