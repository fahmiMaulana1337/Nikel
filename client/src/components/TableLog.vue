<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    computed:{
        ...mapWritableState(useAppStore, ['logs'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchLog'])
    },

    created(){
        this.fetchLog();
      
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
                            <h5 class="card-title">Logs</h5>
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">UpdatedBy</th>
                                        <th scope="col">Time</th>
                                        

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(log, index) in logs" :key="index" >
                                        <th scope="row">{{ index+=1 }}</th>
                                        <td>{{ log.title }}</td>
                                        <td>{{ log.description }}</td>
                                        <td>{{ log.updatedBy }}</td>
                                        <td>{{ log.createdAt }}</td>
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