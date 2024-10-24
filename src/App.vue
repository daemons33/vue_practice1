<template>
  <MainView></MainView>
<!-- <Contador></Contador>
<ListaDeTareas></ListaDeTareas>
 -->  <!-- <h1>HOLA MUNDOOOO!!!</h1>
  <p>{{ contador }}</p>
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button> -->
</template>

<script setup>
  import MainView from './views/MainView.vue';

  import Contador from './modules/contador/Contador.vue';
  import ListaDeTareas from './modules/LlistaDeTareas/ListaDeTareas.vue';
  
  import Sidebar from './components/Sidebar.vue';
  /* import {ref} from 'vue';
  const contador = ref(0);
  const incrementar = () =>{
    contador.value ++;
  }
  const decrementar = ()=>{
    contador.value --;
  } */
</script>

<style scoped>
/* p {
  color:red;
}; */
</style>
