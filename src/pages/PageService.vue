<template>
    <div class="pb-5 bg-light bg-gradient">
        <div class="container pt-5">
            <h1 class="p-5 text-sm-center text-md-start">Esplora i nostri servizi</h1>
            <ul v-for="(info, index) in serviceInfoList" :key="index" class="container mx-auto">
                <li class="service__info d-flex justify-content-center flex-column flex-sm-column flex-md-column flex-lg-row mb-5 list-unstyled rounded shadow">
                    <div class="service__text d-flex flex-column justify-content-start m-5 text-wrap text-start text-white">
                        <h2 class="fw-bold mb-4">{{ info.title }}</h2>
                        <!-- <img :src="info.icon" :alt="info.title" class="my-3" loading="lazy"> -->
                        <p class="fs-4 lh-1">{{ info.text }}</p>
                        
                    </div>
                    <div>
                        <video preload="metadata" autoplay loop plays-inline :src="info.media" class="w-100 h-100 rounded-end"></video>
                    </div>
                </li>
            </ul>
            <!-- Tasto contattaci, indirizza direttamente alla pagina -->
            <div class="d-block py-5">
                <router-link @click.native="ScrollToTop" class="btn btn-warning btn-block rounded fs-4" to="/contacts">Contattaci</router-link>
            </div>
            <!-- Area di lavoro -->
            <div class="container mt-5">
                <h1 class=" text-sm-center text-md-start p-5">Area operativa</h1>
                <div class="d-flex justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58272.754437622!2d18.178445699999997!3d40.3574811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1737996992279!5m2!1sit!2sit" width="90%" style="border: 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded shadow"></iframe>
                </div>
            </div>
            <!-- FAQ -->
            <div class="container mt-5">
                <h2 class="text-sm-center text-md-start p-5">Domande frequenti (FAQ)</h2>
            </div>
            <div class="accordion accordion-flush fst-italic container" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Quali sono i tempi di consegna per un progetto?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body fs-5">testo...</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Che tipo di droni/strumentazione viene utilizzata?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body fs-5">testo...</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            È necessario un sopralluogo iniziale?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body fs-5">testo...</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="price">
            <h1 class="p-5">Confronta i nostri prezzi e richiedi un consulto</h1>
            <div class="container d-flex flex-wrap justify-content-center gap-5 my-5">
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0"><h5 class="m-0">Pacchetto 1</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>300 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0 bg-secondary"><h5 class="m-0">Pacchetto 2</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>500 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
                <div class="card border-0 p-0 shadow">
                    <div class="card-header p-3 border-0 bg-info"><h5 class="m-0">Pacchetto 3</h5></div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <div class="card-title m-0"><h1>800 &euro;</h1></div>
                        <p class="card-text px-3 lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores et quae voluptate dignissimos quam nihil, maiores eligendi incidunt aliquid illum, atque quia sint, assumenda itaque mollitia perspiciatis quis nemo labore?
                        </p>
                        <a href="/about" class="fst-italic mb-3">Contattaci per info</a>
                    </div>
                </div>
            </div>
        </div> -->      
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export default {
    name: 'PageService',
    data() {
        return {
            serviceInfoList: [
                {
                    title: "Fotografia e ripresa aerea",
                    // icon: require("../assets/Icone-EagleLab.png"),
                    media: require("../assets/Riprese.mp4"),
                    text: "Ispezione aerea di immobili con punti di accesso assenti o impraticabili, avanzamento lavori e monitoraggio cantieri con drone"
                },
                {
                    title: "Aerofotogrammetria",
                    // icon: require("../assets/Icone-EagleLab-3d.png"),
                    media: require("../assets/Aerofotogrammetria.mp4"),
                    text: "Fotogrammetria dell'area ispezionata a mezzo drone"
                },
                {
                    title: "Ricostruzione 2D e 3D",
                    // icon: require("../assets/Icone-EagleLab-2d-3d.png"),
                    media: require("../assets/Web.mp4"),
                    text: "Riproduzione grafica in scala su programma CAD 2D e software di modellazione 3D"
                },
                {
                    title: "Consulenze tecniche",
                    // icon: require("../assets/Icone-EagleLab-cons.png"),
                    media: require("../assets/Web.mp4"),
                    text: "Sopralluogo e rilevazione aerea del luogo, teatro del sinistro stradale"
                }
            ],
        }
    },
    methods: {
        ScrollToTop() {
            gsap.to(window, { scrollTo: { x: 0, y : 0 }, duration: 1.2, ease: 'power2.out'});
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 575px) {
    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }
} 

.container {
    .service__info {
        background-color: #131921;
    
        .service__text {
            width: 70%;
        }
        
        h2, p {
            font-weight: 100;
        }
    
        p {
            padding: 3px 30px;
            border-left: 4px solid #f5bc41;
            color: #b8bac9;
    
                @media screen and (max-width: 575px) {
                    font-size: .8rem;
                }
        }
    
        img {
            width: 100px;
            height: auto; 
    
                @media screen and (max-width: 575px) {
                    width: 80px;
                }
        }
        video {
            object-fit: cover;
        }
    }

    iframe {
        height: 450px;
    }
}


// .price {

//     .card {
//         width: 350px;
//         height: 500px;
//     }
// }
</style>