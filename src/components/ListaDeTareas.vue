<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index"> <!-- key da id a la lista -->
                {{ tarea }}
                <button @click="borrarTarea(index)">Borrar</button>
            </li>
        </ul>
    </div>
</template>


<script setup>
    import {ref} from 'vue';
    const tareas = ref([]); //una constante vector
    const nuevaTarea = ref('');
    const addTarea = () =>{
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = '';
    }
    const borrarTarea = (index) =>{
        tareas.value.splice(index,1); //a partir del indice eliminar 1
    }
</script>


<style scoped>
</style>