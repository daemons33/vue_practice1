<template>
    <Header></Header>
    <div class="container">
        <sidebar> </sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import Header from '@/components/Header.vue';
</script>

<style scoped>
    .container{
        display:  flex;
    }
    .content{
        flex: 1;
        padding: 20 px;
    }
</style>