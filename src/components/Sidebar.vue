<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <li><router-link to="/contador">Contador</router-link></li>
        <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
        <li><router-link to="/registro">Registrar</router-link></li>
    </div>
</template>
<script setup>
    import { useRegistrarStore } from '@/modules/registros/stores/registrarStore';
    import {ref, watch} from 'vue';

    const registrarStore = useRegistrarStore();

</script>
<style scoped>
    .sidebar{
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>