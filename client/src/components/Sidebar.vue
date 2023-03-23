<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';


export default {
    methods:{
        ...mapActions(useAppStore, ['logout']),
    }
}
</script>
<template >
    <div>
        <!-- ======= Sidebar ======= -->
        <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">

                <li class="nav-item">
                    <a class="nav-link " @click.prevent="$router.push('/')" href="">
                        <i class="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li><!-- End Dashboard Nav -->
                <li class="nav-item">
                    <a class="nav-link " @click.prevent="$router.push('/vehicle')" href="">
                        <i class="bi bi-car-front"></i>
                        <span>Vehicle</span>
                    </a>
                </li><!-- End Dashboard Nav -->
                <li class="nav-item">
                    <a class="nav-link " @click.prevent="$router.push('/rent')" href="">
                        <i class="bi bi-journal-text"></i>
                        <span>Rent</span>
                    </a>
                </li><!-- End Dashboard Nav -->
                <li class="nav-item">
                    <a class="nav-link " @click.prevent="$router.push('/log')" href="">
                        <i class="bi bi-journal-text"></i>
                        <span>Logs</span>
                    </a>
                </li><!-- End Dashboard Nav -->


                <li class="nav-heading">Account</li>
    

                <li class="nav-item">
                    <a class="nav-link collapsed" @click.prevent="$router.push('/register')" href="">
                        <i class="bi bi-card-list"></i>
                        <span>Add Account</span>
                    </a>
                </li><!-- End Register Page Nav -->
                <li class="nav-item">
                    <a @click.prevent="logout" class="nav-link collapsed" href="users-profile.html">
                        <i class="bi bi-arrow-bar-left"></i>
                        <span>Logout</span>
                    </a>
                </li><!-- End Profile Page Nav -->
            </ul>

        </aside><!-- End Sidebar-->
    </div>
</template>
<style ></style>