<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    data(){
        return {
            form:{
                driver: '',
                VehicleId: '',
                loanDate: '',
                loanDeadline: '',
            }
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['vehicles'])
    },
    methods:{
        ...mapActions(useAppStore, ['fetchVehicle','addRent']),
        doRent(){
            this.addRent(this.form)
            console.log(this.form,"<><><><><><><><>~~~~")
        }

    },
    created(){
        this.fetchVehicle();
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
                                        <h5 class="card-title text-center pb-0 fs-4">Request Rent</h5>
                                    </div>
                                    <form @submit.prevent="doRent" class="row g-3 needs-validation" novalidate>

                                        <div class="col-12">
                                            <label for="name" class="form-label">Driver Name</label>
                                            <div class="input-group has-validation">
                                                <input type="text" v-model="form.driver" name="name" class="form-control" id="name" required>
                                            </div>
                                        </div>
                                        <div class="col-12" >
                                            <label for="yourPassword" class="form-label">Vehicle</label>
                                            <select v-model="form.VehicleId"  class="form-select" aria-label="Default select example">
                                                <option v-for="(vehicle, index) in vehicles" :key="vehicle.id" :value="vehicle.id">{{ vehicle.name }}</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Loan Date</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.loanDate" type="date" name="name" class="form-control" id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="name" class="form-label">Loan Deadline</label>
                                            <div class="input-group has-validation">
                                                <input v-model="form.loanDeadline" type="date" name="name" class="form-control" id="name" required>
                                                <div class="invalid-feedback"></div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100" type="submit">Send Request</button>
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