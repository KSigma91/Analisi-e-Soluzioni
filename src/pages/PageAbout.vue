<template>
    <div class="container d-flex flex-column align-items-center m-auto">
        <div class="col-12 col-md-10 col-lg-10">
            <div v-for="(info, index) in pilotProfile" :key="index"
            class="card-profile position-relative d-flex flex-column justify-content-between gap-4 border-0 rounded shadow w-100" style="width: 18rem;">
                <div class="card-header py-5 rounded bg-white">
                    <img class="position-absolute top-0 start-50 translate-middle rounded-circle" :src="info.photo"  :alt="info.name" loading="lazy">
                </div>
                <div class="card-body">
                    <h3 class="card-title">{{ info.name }}</h3>
                    <p class="card-text p-4 p-md-4 fs-5">{{ info.info }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageAbout',
    data() {
        return {
            name: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
            pilotProfile: [
                {
                    photo: require("../assets/Alessio-Montinaro.jpg"),
                    name: "Alessio Montinaro",
                    info: "Some quick example text to build on the card title and make up the bulk of the card's content."
                },
                {
                    photo: require("../assets/img_profilo_300x.jpg"),
                    name: "Andrea Guidotti",
                    info: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 150px 0;

    .card-profile {
        margin: 150px 0;
        height: 400px;

        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            object-position: top;
        }
    }

    label {
        font-size: .9rem;
    }
}
</style>