<template>
    <div class="container bg-white bg-gradient gap-5">
        <div class="logo-footer d-flex flex-wrap justify-content-between align-items-center border-bottom">
            <div class="d-flex align-items-center py-4">
                <img :src="require('@/assets/Logo EagleLab_Evento.png')" alt="EagleLab-footer">
                <h4 class="m-0 mx-4" style="font-family: TT Fors Trial Variable;">
                    Analisi e Soluzioni
                </h4>
            </div>
            <ul class="d-flex flex-wrap align-items-center gap-3 list-unstyled fs-2 m-0 ms-2 py-4">
                <li>
                    <h4 class="m-0">Seguici su: </h4>
                </li>
                <li>
                    <a href="https://www.facebook.com/eagledrones.salento.9"><i class="fab fa-facebook text-secondary"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andrea-guidotti-1a204224b/"><i class="fab fa-linkedin text-secondary"></i></a>
                </li>
            </ul>
        </div>
        <div class="d-flex flex-wrap py-5">
            <div class="col text-start me-5 mb-3">
                <ul class="list-unstyled">
                    <li class="mb-3">
                        <h6 class="fs-4 text-dark">Contatti</h6>
                    </li>
                    <li class="fs-5">
                        <i class="fas fa-map-marker-alt me-3"></i>
                        Lecce, 73100
                    </li>
                    <li class="d-flex align-items-center my-2 fs-5">
                        <i class="fas fa-at me-3"></i>
                        <div class="lh-base">
                            alessio.montinaro16@pec.it<br> andrea_guidotti@pec.it
                        </div>
                    </li>
                    <li class="d-flex align-items-center my-2 fs-5">
                        <i class="fas fa-envelope me-3"></i>
                        <div class="lh-base">
                            alessio.montinaro16@gmail.com<br> andrea19912014@gmail.com
                        </div>
                    </li>
                    <li class="my-2 fs-5">
                        <i class="fas fa-phone-alt me-3"></i>
                        389 6821133 - 328 7264874
                    </li>
                </ul>
            </div>
            <div class="col text-start">
                <ul class="list-unstyled fw-light">
                    <li class="mb-3">
                        <h6 class="fs-4 text-dark">Link utili</h6>
                    </li>
                    <li class="my-2">
                        <router-link to="/" class="text-decoration-none fs-5 text-dark">Home</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/service" class="text-decoration-none fs-5 text-dark">Servizi</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/tool" class="text-decoration-none fs-5 text-dark">Strumentazione</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/gallery" class="text-decoration-none fs-5 text-dark">Galleria</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/about" class="text-decoration-none fs-5 text-dark">Chi siamo</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style lang="scss" scoped>
.logo-footer {

    img {
        width: auto;
        height: 50px;
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