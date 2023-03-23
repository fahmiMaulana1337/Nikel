<template >
    <main id="main" class="main">

        <h1>Graph History Of Vehicle</h1>
        <hr>
        <div class="d-flex justify content-center" style="width: 900px; margin-left: 10%;">
          
            <div class="container">
                <canvas id="barChart"></canvas>
                <canvas id="myChart"></canvas>
            </div>
            <hr>
                    <div class="container">
                        <div class="col">
                            <canvas id="lineChart"></canvas>
                            <canvas id="doughnutChart" ></canvas>
                        </div>

                    </div>

              
            

        </div>


    </main>
</template>
<script>


import Chart from 'chart.js/auto';
import { mapActions, mapWritableState } from 'pinia';
import { useAppStore } from '../stores/app';
import axios from 'axios'
const BASE_URL = 'http://localhost:3000'


export default {

    data() {
        return {
            graphData: []
        }
    },
    methods: {
        async graph() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: `${BASE_URL}/graph`,
                })

                this.graphData = data

                let name = this.graphData.map((item) => item.name)
                let count = this.graphData.map((item) => item.count)
                console.log(name, count)
                console.log(data, "APPPP")
                const ctx = document.getElementById('myChart');

                const myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: name,
                        datasets: [{
                            label: 'Graphic History of the number rented Vehicles',
                            data: count,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                            ],
                            borderWidth: 1
                        }]
                    },

                });

                const char = new Chart(document.querySelector('#lineChart'), {
                    type: 'line',
                    data: {
                        labels: name,
                        datasets: [{
                            label: 'Line Chart',
                            data: count,
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                min: 0,
                                max: 10
                            },
                            spanGaps: true
                        }
                    }
                });



                new Chart(document.querySelector('#barChart'), {
                    type: 'bar',
                    data: {
                        labels: name,
                        datasets: [{
                            label: 'Graphic History of the number rented Vehicles',
                            data: count,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                min: 0,
                                max: 10
                            },
                            spanGaps: true
                        }
                    }
                });

                const y = new Chart(document.querySelector('#doughnutChart'), {
                    type: 'doughnut',
                    data: {
                        labels:name,
                        datasets: [{
                            label: 'My First Dataset',
                            data: count,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                        }]
                    }
                });

            } catch (error) {
                console.log(error);
            }
        }
    },

    created() {
        if (this.$route.path == '/dashboard') {
            this.graph()
        }
    },
    mounted() {
        this.graph()
    }
}
</script>
<style></style>