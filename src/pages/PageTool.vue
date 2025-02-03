<template>
    <div class="drone__container">
        <div class="container">
            <h1 class="text-sm-center text-md-start p-5">Mavic Air 2S</h1>
            <div class="drone__list card d-flex justify-content-center align-items-center h-100 m-auto p-5 border-0 rounded-1 shadow col-lg-12">
                <div class="p-0 p-md-5 p-lg-5">
                    <img src="../assets/eead2358fecb94ceb86d412f4ca4b67d.png" alt="Mavic_Air_2S" loading="lazy">
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    <div v-for="mavic in mavicSpecs" :key="mavic"
                    class="drone__icon d-flex flex-column justify-content-start align-items-center gap-2 p-2 m-3 rounded-4 text-dark">
                        <img :src="mavic.icon" :alt="mavic.title" loading="lazy"> 
                        <big class="fs-4">{{ mavic.title }}</big>
                        <p class="fs-5">{{ mavic.text }}</p>
                    </div>
                </div>
                <div class="my-5">
                    <video width="90%" preload="metadata" autoplay loop>
                        <source src="../assets/Eaglelabloop Site.mp4">
                    </video>
                </div>
            </div>
            <h1 class="text-sm-center text-md-start p-5">Spark</h1>
            <div class="drone__list card d-flex justify-content-center align-items-center h-100 m-auto p-5 border-0 rounded-1 shadow col-lg-12">
                <div class="p-0 p-md-5 p-lg-5">
                    <img src="../assets/toppng.com-dji-spark-top-view-700x608.png" alt="Spark" style="width: 250px" loading="lazy">
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    <div v-for="spark in sparkSpecs" :key="spark"
                    class="drone__icon d-flex flex-column justify-content-start align-items-center gap-2 p-2 m-3 rounded-4 text-dark">
                        <img :src="spark.icon" :alt="spark.title" loading="lazy">
                        <big class="fs-4">{{ spark.title }}</big>
                        <p class="fs-5">{{ spark.text }}</p>
                    </div>
                </div>
                <div class="my-5">
                    <video width="90%" preload="metadata" autoplay loop>
                        <source src="../assets/Eaglelabloop Site.mp4">
                    </video>
                </div>
            </div>
        </div>
        <!-- INFO SERVIZI -->
        <div class="drone__service d-flex flex-column align-items-center">
            <div class="d-flex flex-wrap justify-content-center">
                <div class="drone__text d-flex align-items-center p-4 bg-secondary">
                    <p class="fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis veniam asperiores quidem? Explicabo corrupti delectus aspernatur similique earum, architecto eaque ea, voluptatum quod repellat tempora velit autem maiores consequuntur!
                    </p>
                </div>
                <img src="https://4.img-dpreview.com/files/p/E~C23x0S1333x1000T1200x900~articles/7348982418/j_Dead_Sea_29-12-2018_18.jpeg" alt="" loading="lazy">
            </div>
            <div class="d-flex flex-wrap justify-content-center">
                <img src="https://4.img-dpreview.com/files/p/E~C23x0S1333x1000T1200x900~articles/7348982418/j_Dead_Sea_29-12-2018_18.jpeg" alt="" loading="lazy">
                <div class="drone__text d-flex align-items-center order-md-2 p-4 bg-secondary">
                    <p class="fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis veniam asperiores quidem? Explicabo corrupti delectus aspernatur similique earum, architecto eaque ea, voluptatum quod repellat tempora velit autem maiores consequuntur!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTool',
    data() {
        return {
            mavicSpecs: [
                {
                    icon: require("../assets/Icone-EagleLab-Lens.png"),
                    title: "Foto",
                    text: "20Mp e sensore CMOS da 1\""
                },
                {
                    icon: require("../assets/Icone-EagleLab-Lens-Video.png"),
                    title: "Video",
                    text: "Riprese in 5.4K/30fps e 4K/60fps"
                },
                {
                    icon: require("../assets/Icone-EagleLab-battery.png"),
                    title: "Batteria",
                    text: "Autonomia di volo di circa 30 minuti"
                },
                {
                    icon: require("../assets/Icone-EagleLab-weight.png"),
                    title: "Peso",
                    text: "595g"
                }
            ],
            sparkSpecs: [
                {
                    icon: require("../assets/Icone-EagleLab-Lens.png"),
                    title: "Foto",
                    text: "12Mp e sensore CMOS 1/2.3”"
                },
                {
                    icon: require("../assets/Icone-EagleLab-Lens-Video.png"),
                    title: "Video",
                    text: "Riprese in 1080p/30fps"
                },
                {
                    icon: require("../assets/Icone-EagleLab-battery.png"),
                    title: "Batteria",
                    text: "Autonomia di volo di circa 15 minuti"
                },
                {
                    icon: require("../assets/Icone-EagleLab-weight.png"),
                    title: "Peso",
                    text: "< 300g"
                }
            ]
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
.drone__container {
    width: 100%;
    height: 100%;
    background-color: #d1dee5;
    
    big {
        font-weight: 500;
    }

    p {
        font-weight: 200;
    }

    .drone__list {
        // debug
        height: 60vh;

        img {
            width: 400px;
            object-fit: cover;

            @media screen and (max-width: 437px) {
                width: 300px;
            }
        }

        .drone__icon {
            width: 200px;
            height: 150px;

            img {
                width: auto;
                height: 32px;
            }
        }

        video {
            box-shadow: 0 80px 50px -70px #000;

            @media screen and (max-width: 760px) {
                width: 100%;
            }
        }
    }

    .drone__service {
        padding: 100px 0;
        width: 100%;

        .drone__text {
            width: 600px;
            height: 563px;
            object-fit: cover;

            @media screen and (max-width: 1199px) {
                width: 690px;
                height: 300px;
            }

            @media screen and (max-width: 760px) {
                width: 510px;
                height: 300px;
            }

            @media screen and (max-width: 544px) {
                width: 340px;
                height: 300px;
            }
        }

        img {
            width: 600px;
            height: 563px;

            @media screen and (max-width: 1199px) {
                width: 690px;
                height: 600px;
            }

            @media screen and (max-width: 760px) {
                width: 510px;
                height: 450px;
            }

            @media screen and (max-width: 544px) {
                width: 340px;
                height: 300px;
            }
        }
    }
}
</style>