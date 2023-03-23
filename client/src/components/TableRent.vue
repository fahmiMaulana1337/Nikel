<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    methods: {
        ...mapActions(useAppStore, ['fetchRent','acceptRequest','rejectRequest','doDownload']),
        acceptRequests(id){
            this.acceptRequest(id)
            this.fetchRent()
        },
        rejectRequests(id){
            this.rejectRequest(id)
            this.fetchRent()
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ['rents','user'])
    },
    created() {
        this.fetchRent();
        console.log(this.rents)

        
    },
}
</script>
<template >
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Rent Request</h5>
                            <button class="btn btn-primary" v-if="user==='Admin'" @click.prevent="$router.push('/addRequest')">Request New Rent</button>

                            <div class="d-flex justify content-end" style="margin-left: 90%;">
                            <button class="btn btn-success" @click.prevent="doDownload" >Download History</button>

                            </div>
                            <hr>
                            <!-- Table with stripped rows -->
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Driver</th>
                                        <th scope="col">Name Vehicle</th>
                                        <th scope="col">Load Date</th>
                                        <th scope="col">Load Deadline</th>
                                        <th scope="col">BBM</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"> Rent Request Date</th>
                                        <th v-if="user!=='Admin'" scope="col">Accept</th>
                                        <th v-if="user!=='Admin'" scope="col">Reject</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(rent, index) in rents" :key="index">
                                        <th scope="row">{{ index + 1 }}</th>
                                        <td>{{ rent.driver }}</td>
                                        <td>{{ rent.Vehicle.name }}</td>
                                        <td>{{ rent.loanDate }}</td>
                                        <td>{{ rent.loanDeadline }}</td>
                                        <td>{{ rent.Vehicle.bbmConsume }} Km/Liter</td>
                                        <td>{{ rent.status }}</td>
                                        <td>{{ rent.createdAt }}</td>
                                        <td>
                                            <button v-if="user!=='Admin'" @click.prevent="acceptRequests(rent.id)" class="btn btn-success">Accept</button>
                                        </td>
                                        <td>
                                            <button v-if="user!=='Admin'" @click.prevent="rejectRequests(rent.id)" class="btn btn-danger">Reject</button>
                                        </td>
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