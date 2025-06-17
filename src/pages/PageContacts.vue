<template>
    <div class="container pb-5">
        <h1 class="text-sm-center text-md-start py-5">Contattaci</h1>
        <div class="d-flex justify-content-xs-center justify-content-md-start justify-content-lg-start flex-wrap pb-5">
            <div class="col-xs-12 col-lg-4">
                <ul class="list-unstyled text-start fs-5 mb-5">
                    <li class="mb-2"><b>AMG Lab</b></li>
                    <li class="d-flex align-items-center mb-3">
                        <div><i class="fas fa-map-marker-alt fs-4 me-4"></i>Lecce, 73100</div>
                    </li>
                    <li class="d-flex align-items-center mb-3"><i class="fas fa-envelope fs-4 me-3"></i> amglab.info@gmail.com</li>
                    <li class="d-flex align-items-center mb-3"><i class="fas fa-phone-alt fs-4 me-3"></i> 389 6821133 - 328 7264874</li>
                    <hr class="my-2 opacity-100">
                </ul>
            </div>
            <form ref="form" class="needs-validation" novalidate @submit.prevent="sendMail">
                <div class="d-flex flex-wrap mb-3 gap-4">
                    <div class="col-12 col-md-12 col-lg-4 text-start">
                        <label for="nome" class="form-label">Nome <span class="text-danger">*</span></label>
                        <input type="text" class="form-control rounded-0" :class="{'is-invalid': errors.name}" id="nome" name="nome" v-model="form.name" required>
                        <div class="invalid-feedback">
                            {{ errors.name }}
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4 text-start">
                        <label for="cognome" class="form-label">Cognome <span class="text-danger">*</span></label>
                        <input type="text" class="form-control rounded-0" :class="{'is-invalid': errors.lastname}" id="cognome" name="cognome" v-model="form.lastname" required>
                        <div class="invalid-feedback">
                            {{ errors.lastname }}
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4 text-start">
                        <label for="cellulare" class="form-label me-1">Cellulare <span class="form-text">(Opzionale)</span></label>
                        <input type="tel" class="form-control rounded-0" id="cellulare" name="cellulare" v-model="form.phone" @input="form.phone = form.phone.replace(/\D/g, '')">
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                    <input type="email" class="form-control rounded-0" :class="{'is-invalid': errors.email}" id="email" name="email" v-model="form.email" required>
                    <div class="invalid-feedback">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <label for="messaggio" class="form-label">Messaggio</label>
                    <textarea class="form-control rounded-0" :class="{'is-invalid': errors.message}" id="messaggio" name="messaggio" rows="4" v-model="form.message" required></textarea>
                    <div class="invalid-feedback">
                        {{ errors.messaggio }}
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-outline-warning btn-block fs-5" type="submit" @click="showAlert">Invia</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser'; 
import Swal from 'sweetalert2' 

export default {
    name: 'PageContacts',
    data() {
        return {
            form: {
                nome: '',
                cognome: '',
                cellulare: '',
                email: '',
                messaggio: '',
            },
            errors: {}
        }
    },
    methods: {
        sendMail(event) {
            if (this.showAlert()) {
                event.preventDefault();
                emailjs.sendForm('service_z746n4j', 'template_rnslkem', this.$refs.form, 'zv6jTrcK-qf47MfQb')
                .then(() => {
                    Swal.fire({ icon : 'success', title : 'Successo!', text : 'Messaggio inviato con successo', confirmButtonColor : '#3085d6'});
                    this.resetForm();
                })
                .catch(() => {
                    Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'C\'è stato un problema durante l\'invio del messaggio', confirmButtonColor : '#3085d6'});
                });
            } else {
                Swal.fire({ icon : 'error', title : 'Si è verificato un errore', text : 'Controlla i campi inseriti', confirmButtonColor : '#3085d6'});
            }
        },
        showAlert() {
            this.errors = {};
            let valid = true;

            if (!this.form.name) {
                this.errors.name = 'Non hai inserito il tuo nome';
                valid = false;
            }
            if (!this.form.lastname) {
                this.errors.lastname = 'Non hai inserito il tuo cognome';
                valid = false;
            }
            if (!this.form.email) {
                this.errors.email = 'Non hai inserito la tua email';
                valid = false;
            } else if (!this.form.email.includes('@')) {
                this.errors.email = 'Non hai inserito la @ alla tua email';
                valid = false;
            } else if (!this.form.email.includes('.')) {
                this.errors.email = 'La tua email deve contenere un punto (.)';
                valid = false;
            }
            if (!this.form.message) {
                this.errors.message = 'Non hai inserito il tuo messaggio';
                valid = false;
            }

            return valid;
        },
        resetForm() {
            this.form = { name : '', lastname : '', email : '', phone : '', message : ''};
            this.errors = {};
            this.$refs.form.reset();
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
hr {
    width: 45px;
    border: 1px solid #f5bc41;
}
</style>