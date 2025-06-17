<template>
    <div class="gap-5" style="background-color: #232f3e; color: #dddddd;">
        <div class="container-fluid d-flex flex-wrap justify-content-center justify-content-md-start justify-content-lg-center gap-5 py-5">
            <div class="text-start mb-3" style="width: 250px">
                <ul class="list-unstyled lh-lg">
                    <li class="mb-3">
                        <h6 class="fs-4">Contatti</h6>
                    </li>
                    <li class="d-flex align-items-center fs-5">
                        <i class="fas fa-map-marker-alt me-4"></i>
                        Lecce, 73100
                    </li>
                    <li class="d-flex align-items-center fs-5">
                        <i class="fas fa-envelope me-3"></i>
                        <div>
                            amglab.info@gmail.com
                        </div>
                    </li>
                    <li class="d-flex align-items-center fs-5">
                        <i class="fas fa-phone-alt me-3"></i>
                        389 6821133 - 328 7264874
                    </li>
                </ul>
            </div>
            <div class="text-start mb-3" style="width: 250px">
                <ul class="list-unstyled lh-lg fw-light">
                    <li class="mb-3">
                        <h6 class="fs-4">Link utili</h6>
                    </li>
                    <li>
                        <router-link @click.native="ScrollToTop" to="/" class="text-decoration-none fs-5" style="color: #dddddd;">Home</router-link>
                    </li>
                    <li>
                        <router-link @click.native="ScrollToTop" to="/service" class="text-decoration-none fs-5" style="color: #dddddd;">Servizi</router-link>
                    </li>
                    <li>
                        <router-link @click.native="ScrollToTop" to="/gallery" class="text-decoration-none fs-5" style="color: #dddddd;">Galleria</router-link>
                    </li>
                    <li>
                        <router-link @click.native="ScrollToTop" to="/about" class="text-decoration-none fs-5" style="color: #dddddd;">Chi siamo</router-link>
                    </li>
                    <li>
                        <router-link @click.native="ScrollToTop" to="/contacts" class="text-decoration-none fs-5" style="color: #dddddd;">Contatti</router-link>
                    </li>
                </ul>
            </div>
            <div class="text-start mb-3" style="width: 250px">
                <ul class="d-flex gap-3 list-unstyled">
                    <li>
                        <h6 class="m-0 fs-4">Seguici su: </h6>
                    </li>
                    <li class="fs-3">
                        <a href="https://www.facebook.com/eagledrones.salento.9"><i class="fab fa-facebook text-secondary"></i></a>
                    </li>
                    <li class="fs-3">
                        <a href="https://www.linkedin.com/in/andrea-guidotti-1a204224b/"><i class="fab fa-linkedin text-secondary"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- sezione logo -->
        <div class="logo-footer">
            <hr style="opacity: 10%">
            <div class="container-fluid d-flex justify-content-center">
                <div class="d-inline-flex align-items-center pb-3">
                    <img :src="require('@/assets/Logo-AMGLab_Footer.png')" alt="EagleLab-footer" loading="lazy">
                    <h4 class="m-0 mx-2 fw-semibold">
                        AMG Lab
                    </h4>
                </div>
            </div>
        </div>
        <div class="bg-dark py-3">aggiungere la privacy policy</div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export default {
    name: 'FooterApp',
    methods: {
        ScrollToTop() {
            gsap.to(window, { scrollTo: { x: 0, y : 0 }, duration: 1.2, ease: 'power2.out'});
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-footer {

    img {
        width: auto;
        height: 40px;
    }
}

ul:nth-child(1) li {
    font-size: .9rem;
}

.gallery {
    width: 300px;

    img {
        width: 60px;
        height: 60px;

        @media screen and (max-width: 1361px) {
            width: 100px;
            height: 100px;
        }
    }
}
</style>