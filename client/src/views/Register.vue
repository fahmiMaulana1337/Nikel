<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    methods:{
        ...mapActions(useAppStore, ['register']),
        async doRegister(){
            this.register(this.form)
        }
    },
    data(){
        return {
            form:{
                username: '',
                password: '',
                role:'',
                departement:''
            }
        }
    }
}
</script>
<template>
    <main>
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Add an Account</h5>
                                        <p class="text-center small">Enter your personal details to Add account</p>
                                    </div>

                                    <form class="row g-3 needs-validation" @submit.prevent="doRegister" novalidate>
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <input type="text" v-model="form.username" name="username" class="form-control" id="yourUsername"
                                                    required>
                                                <div class="invalid-feedback">Please choose a username.</div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" v-model="form.password" name="password" class="form-control" id="yourPassword"
                                                required>
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Role</label>
                                            <select class="form-select" v-model="form.role" aria-label="Default select example">
                                            <option value="">--Select Role --</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Departement</label>
                                            <select class="form-select" v-model="form.departement" aria-label="Default select example">
                                            <option value="" >--Select Departement --</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Kantor Cabang">Kantor Cabang</option>
                                            <option value="Kantor Pusat">Kantor Pusat</option>
                                        </select>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Create Account</button>
                                        </div>
                                        
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    </main><!-- End #main -->
</template>
<style></style>