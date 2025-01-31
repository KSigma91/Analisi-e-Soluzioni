<template>
    <div class="pb-5 bg-light bg-gradient">
        <div class="container">
            <h1 class="p-5 text-start">Esplora i nostri servizi</h1>
            <ul v-for="(info, index) in serviceInfoList" :key="index" class="container mx-auto">
                <li class="service__info d-flex justify-content-center flex-column flex-sm-column flex-md-column flex-lg-row bg-gradient m-4 list-unstyled">
                    <div class="service__text d-flex flex-column justify-content-around m-5 text-wrap text-start">
                        <h2>{{ info.title }}</h2>
                        <img :src="info.icon" :alt="info.title" class="my-3" loading="lazy">
                        <p class="fs-5 fw-light">{{ info.text }}</p>
                        <div class="d-block">
                            <div class="btn btn-outline-success btn-block rounded-1 fs-5" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Contattaci</div>
                        </div>
                    </div>
                    <div>
                        <video preload="metadata" autoplay loop plays-inline :src="info.media" class="w-100 h-100"></video>
                    </div>
                </li>
            </ul>
            <!-- Form invio messaggio -->
            <div class="modal fade" id="exampleModal" href="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nuovo Messaggio</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body fs-6">
                            <form ref="form" method="post" @submit.prevent="sendMail">
                                <div class="">
                                    <!-- Name input -->
                                    <div class="form-outline mb-4 text-start">
                                        <label class="form-label fst-italic" for="name">Nome <span class="text-danger">*</span></label>
                                        <input type="text" id="name" name="name" class="form-control rounded-0" v-model="name" required />
                                    </div>
                                    <!-- Lastname input -->
                                    <div class="form-outline mb-4 text-start">
                                        <label class="form-label fst-italic" for="lastname">Cognome <span class="text-danger">*</span></label>
                                        <input type="text" id="lastname" name="lastname" class="form-control rounded-0" v-model="lastname" required />
                                    </div>
                                    <!-- Email input -->
                                    <div class="form-outline mb-4 text-start">
                                        <label class="form-label fst-italic" for="email">Email <span class="text-danger">*</span></label>
                                        <input type="email" id="email" name="email" class="form-control rounded-0" v-model="email" required />
                                    </div>
                                    <!-- Phone input -->
                                    <div class="form-outline mb-4 text-start">
                                        <label class="form-label fst-italic" for="phone">Cellulare</label>
                                        <input type="tel" id="phone" name="phone" class="form-control rounded-0" v-model="phone" />
                                    </div>
                                </div>
                                <!-- Message input -->
                                <div class="form-outline mb-4 text-start">
                                    <label class="form-label fst-italic" for="message">Messaggio</label>
                                    <textarea type="text" id="message" name="message" class="form-control rounded-0" rows="8" v-model="message" required></textarea>
                                </div>
                                <div class="d-flex justify-content-between modal-footer gap-3 rounded-1">
                                    <button type="button" class="btn btn-outline-secondary btn-block fs-5" data-bs-dismiss="modal">Chiudi</button>
                                    <!-- Submit button -->
                                    <button type="submit" value="Send" class="btn btn-outline-warning btn-block fs-5" data-bs-dismiss="modal" @click="showAlert">Invia</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Area di lavoro -->
            <div class="container mt-5">
                <h1 class="text-start p-5">Area operativa</h1>
                <div class="d-flex justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58272.754437622!2d18.178445699999997!3d40.3574811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sit!2sit!4v1737996992279!5m2!1sit!2sit" width="90%" style="border: 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-1"></iframe>
                </div>
            </div>
            <!-- FAQ -->
            <div class="container mt-5">
                <h2 class="p-5 text-start">Domande frequenti (FAQ)</h2>
            </div>
            <div class="accordion accordion-flush fst-italic container" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Quali sono i tempi di consegna per un progetto?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body fs-5">testo...</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Che tipo di droni/strumentazione viene utilizzata?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body fs-5">testo...</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
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
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2' 

export default {
    name: 'PageService',
    data() {
        return {
            serviceInfoList: [
                {
                    title: "Fotografia e ripresa aerea",
                    icon: require("../assets/Icone-EagleLab.png"),
                    media: require("../assets/Riprese.mp4"),
                    text: "Ispezione aerea di immobili con punti di accesso assenti o impraticabili, avanzamento lavori e monitoraggio cantieri con drone"
                },
                {
                    title: "Aerofotogrammetria",
                    icon: require("../assets/Icone-EagleLab-3d.png"),
                    media: require("../assets/Aerofotogrammetria.mp4"),
                    text: "Fotogrammetria dell'area ispezionata a mezzo drone"
                },
                {
                    title: "Ricostruzione 2D e 3D",
                    icon: require("../assets/Icone-EagleLab-2d-3d.png"),
                    media: require("../assets/Web.mp4"),
                    text: "Riproduzione grafica in scala su programma CAD 2D e software di modellazione 3D"
                },
                {
                    title: "Consulenze tecniche",
                    icon: require("../assets/Icone-EagleLab-cons.png"),
                    media: require("../assets/Web.mp4"),
                    text: "Sopralluogo e rilevazione aerea del luogo, teatro del sinistro stradale"
                }
            ]
        }
    },
    methods: {
        sendMail(event) {
            event.preventDefault();
            emailjs.sendForm('service_z746n4j', 'template_rnslkem', this.$refs.form, 'zv6jTrcK-qf47MfQb')
            .then((result) => {
                console.log('Success', result.status, result.text);
            }, (error) => {
                console.log('Error', error);
            });
            event.target.reset();
        },
        showAlert() {
            if (!this.name || !this.lastname || !this.email.includes('@') || !this.email.includes('.') || !this.message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Si è verificato un errore',
                    text: 'Invio messaggio non riuscito',
                    confirmButtonColor: '#3085d6'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Ben fatto!',
                    text: 'Messaggio inviato con successo',
                    confirmButtonColor: '#3085d6'
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    // width: 100%; 

    .service__info {
        background-color: #ECEFF1;
    
        .service__text {
            width: 80%;
        }
        
        h2, p {
            font-weight: 100;
            color: #37474F;
    
            // @media screen and (max-width: 575px) {
            //     font-size: 1.5rem;
            // }
        }
    
        p {
            padding: 3px 30px;
            border-left: 4px solid #f5bc41;
    
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
            max-width: 100%;
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