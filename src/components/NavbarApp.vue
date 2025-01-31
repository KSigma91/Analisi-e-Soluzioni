<template>
    <div>
        <nav class="navbar navbar-expand-md bg-white bg-gradient">
            <div class="container-fluid position-relative d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <a class="navbar-brand ms-3" href="/home">
                        <img src="../assets/Logo EagleLab_Evento.png" alt="EagleLab-logo" loading="lazy">
                    </a>
                    <h3 class="m-0 mx-2" style="font-family: TT Fors Trial Variable;">
                        Analisi e Soluzioni
                    </h3>
                </div>
               
            </div>
        </nav>
        <nav class="under_nav navbar navbar-expand-md">
            <div class="container-fluid position-relative d-flex justify-content-end">
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h4 class="offcanvas-title text-warning" id="offcanvasNavbarLabel">Menu</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav d-flex justify-content-center mx-auto gap-4">
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link fs-5" to="/">Home</router-link>
                            </li>
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link fs-5" to="/service">Servizi</router-link>
                            </li>
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link fs-5" to="/tool">Strumentazione</router-link>
                            </li>
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link fs-5" to="/gallery">Galleria</router-link>
                            </li>
                            <li class="nav-item" data-bs-dismiss="offcanvas">
                                <router-link class="nav-link fs-5" to="/about">Chi siamo</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mx-3">
                    <button class="navbar-toggler rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavbarApp'
}
</script>

<style lang="scss" scoped>
.navbar {

    @media screen and (max-width: 991px) {
        height: 110px;
    }

    img {
        // margin: 20px;
        width: auto;
        height: 40px;
    }

    h3 {
        @media screen and (max-width: 767px) {
            font-size: 2rem;
        }

        @media screen and (max-width: 575px) {
            text-align: start;
        }
    }

    
}
.under_nav {
    height: 38px; 
    //background-color: #282a35;
    background-color: #232f3e; // colore alternativo

    @media screen and (max-width: 767px) {
        height: 58px; 
    }

    .offcanvas {
        background: #2E2E37;

        .navbar-nav {
            width: calc(100% - 106.667px);
    
            a {
                font-size: .91rem;
                font-weight: 300;
                color: #fff;
    
                &:hover {
                    color: #f5bc41;
                    transition: all .2s linear;
                }
    
                &:focus {
                    display: block;
                    color: #f5bc41;
                    // box-shadow: inset 0 -3px 0 #f5bc41;
                }

                @media screen and (max-width: 767px) {
                    color: #fff;
                }

                @media screen and (max-width: 575px) {
                    color: #fff;
                }
            }
    
            .dropdown-item {
                color: #2E2E37;

                &:hover {
                    box-shadow: 0 0 0 #000;
                }
    
                &::after {
                    position: absolute;
                    top: -10px;
                    left: 21px;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    border-bottom: 15px solid #fff;
                    content: '';
                    display: block;
                    z-index: 2;
                    transition: all 200ms linear;

                    @media screen and (max-width: 767px) {
                        top: 35px;
                        left: 105px;
                    }
    
                    img {
                        width: 80px;
                        height: 80px;
                    }
                }
            }
        }
    }

    .navbar-toggler {

        @media screen and (max-width: 767px) {
            background: #fff;
        }
    }
}
</style>