<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data(){
        return{
            form:{
                name: '',
                type: '',
                category: '',
                bbmConsume: '',
                serviceDate: '',
            }
        }
    },
    methods: {
        ...mapActions(useAppStore, ['addVehicle']),
        async doAddVehicle(){
            console.log(this.form)
            this.addVehicle(this.form)
        }
    },
}
</script>
<template >
    <div>
        <div class="container">

            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div class="card mb-3">

                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Add new Vehicle</h5>
                                    </div>

                                    <form @submit.prevent="doAddVehicle" class="row g-3 needs-validation">

                                        <div class="col-12">
                                            <label for="name" class="form-label">Name</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.name" type="text" name="name" class="form-control" id="name" required>
                                                <div class="invalid-feedback">Vehicle Name</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Type</label>
                                            <select v-model="form.type" class="form-select" aria-label="Default select example">
                                                 <option value="" selected>--Select Type --</option>
                                                <option value="Angkutan Orang">Angkutan Orang</option>
                                                <option value="Angkutan Barang">Angkutan Barang</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Category</label>

                                            <select v-model="form.category" class="form-select" aria-label="Default select example">
                                                <option value="" selected>--Select Category --</option>
                                                <option value="Perusahaan">Perusahaan</option>
                                                <option value="Persewaan">Persewaan</option>
                                            </select>

                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">BBM Consume</label>
                                            <div class="input-group has-validation">
                                               <input v-model="form.bbmConsume" type="number" name="name" class="form-control" id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Service Date</label>
                                            <div class="input-group has-validation">
                                               <input type="date" v-model="form.serviceDate" name="name" class="form-control" id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Add</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    </div>
</template>
<style ></style>