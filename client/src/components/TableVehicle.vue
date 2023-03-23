<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    computed:{
        ...mapWritableState(useAppStore, ['vehicles'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchVehicle','deleteVehicle'])
    },

    created(){
        this.fetchVehicle();
      
    }
}

</script>
<template >
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Vehicle</h5>
                            <button @click.prevent="$router.push('/addVehicle')" class="btn btn-success">Add Vehicle</button>
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">BBM Consume</th>                         
                                        <th scope="col">Service Date</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(vehicle, index) in vehicles" :key="index" >
                                        <th scope="row">{{ index+=1 }}</th>
                                        <td>{{ vehicle.name }}</td>
                                        <td>{{ vehicle.type }}</td>
                                        <td>Milik {{ vehicle.category }}</td>
                                        <td>{{ vehicle.bbmConsume }} Km/Liter</td>
                                        <td>{{ vehicle.serviceDate }}</td>
                                        <td><button class="btn btn-warning" @click.prevent="$router.push(`/editVehicle/${vehicle.id}`)">Edit</button></td>
                                        <td><button class="btn btn-danger" @click.prevent="deleteVehicle(vehicle.id)">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
             

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>
<style ></style>