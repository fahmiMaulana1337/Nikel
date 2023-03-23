import { defineStore } from 'pinia';
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
export const useAppStore = defineStore('app', {
    state: () => ({
        cat: [],
        isLogin: false,
        vehicles: [],
        vehicle: {},
        rents: [],
        user: [],
        graphData: [],
        logs: [],
    }),
    actions: {
        async login(form) {
            try {
                console.log(form);
                const { data } = await axios({
                    method: 'post',
                    url: `${BASE_URL}/login`,
                    data: form
                })
                console.log(data);
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/')
                Swal.fire({
                    icon: 'success',
                    title: 'Login Success',
                    text: "Welcome Back",
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.name,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async register(form) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: `${BASE_URL}/register`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: form
                })
                Swal.fire({
                    icon: 'success',
                    text: "Register Successfully",
                })
                this.router.push('/login')
            } catch (error) {
                console.log(error);
                if (error.response) {
                   
                        console.log(error.response.data)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.required,
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    
                }
            }
        },
        async addVehicle(form) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: `${BASE_URL}/addVehicle`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },

                    data: form
                })
                Swal.fire({
                    icon: 'success',
                    text: "Add Car Successfully",
                })
                this.router.push('/vehicle')
            } catch (error) {
                console.log(error);
                if (error.response) {
                    if (error.response.data[0].message) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data[0].message,
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.required,
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    }
                }
            }
        },
        async logout() {
            localStorage.removeItem('access_token');
            this.isLogin = false;
            this.router.push('/login')
        },
        async fetchVehicle() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `${BASE_URL}/getVehicle`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.vehicles = data
                console.log(this.vehicles)
            } catch (error) {
                console.log(error);
            }
        },
        async detailVehicle(id) {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: `${BASE_URL}/detailVehicle/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                console.log("masuk sini")
                console.log(data)
                this.vehicle = data
                console.log(this.vehicle)
            } catch (error) {
                console.log(error);
            }
        },
        async editVehicle(id, form) {
            try {
                const { data } = await axios({
                    method: 'put',
                    url: `${BASE_URL}/editVehicle/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: form
                })
                Swal.fire({
                    icon: 'success',
                    text: "Edit Vehicle Successfully",
                })
                this.router.push('/vehicle')

            } catch (error) {

            }
        },
        async deleteVehicle(id) {
            try {
                const { data } = await axios({
                    method: 'delete',
                    url: `${BASE_URL}/deleteVehicle/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                Swal.fire({
                    icon: 'success',
                    text: "Delete Vehicle Successfully",
                })
                this.fetchVehicle()
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    text: "Vehicle still in use",
                })
            }
        },
        async fetchRent() {
            try {
                const { data } = await axios({
                    method: "get",
                    url: `${BASE_URL}/getRent`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.rents = data.rent
                console.log(data, "ini data <<<<<<<<<<<<<<<<<<")
                this.user = data.user
                console.log(this.rents)
            } catch (error) {
                console.log(error);
            }
        },
        async addRent(form) {
            try {

                const { data } = await axios({
                    method: 'post',
                    url: `${BASE_URL}/addRent`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },

                    data: form
                })
                Swal.fire({
                    icon: 'success',
                    text: "Request Successfully",
                })
                this.router.push('/rent')
            } catch (error) {
                console.log(error);
                if (error.response) {
                    if (error.response.data[0].message) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data[0].message,
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.response.data.required,
                            footer: '<a href="">Why do I have this issue?</a>'
                        })
                    }
                }
            }
        },
        async acceptRequest(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: `${BASE_URL}/acceptRequest/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                Swal.fire({
                    icon: 'success',
                    text: "Accept Request Successfully",
                })
                this.fetchRent()
                this.router.push('/rent')

            } catch (error) {

            }
        },
        async rejectRequest(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: `${BASE_URL}/rejectRequest/${id}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                Swal.fire({
                    icon: 'success',
                    text: "Reject Request Successfully",
                })
                this.fetchRent()
                this.router.push('/rent')

            } catch (error) {
                Swal.fire({
                    icon: 'success',
                    text: "Reject Request Failed",
                })
            }
        },
        doDownload() {
            axios({
                url: 'http://localhost:3000/download',
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'RentHistory.xlsx');
                document.body.appendChild(fileLink);

                fileLink.click();
            });
            console.log("masuk sini")
        },
        async fetchLog(){
            try {
                const { data } = await axios({
                    method: "get",
                    url: `${BASE_URL}/log`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                this.logs = data
                console.log(this.logs)
            } catch (error) {
                console.log(error);
            }
        }
    },
});
