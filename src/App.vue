<script setup>
  import { ref } from 'vue';
</script>

<template>
  <div class="demo">
    <header>
        <div class="logo">
        </div>
        <nav>
            <router-link :to="`/inicio`" active-class="active">Inicio</router-link>
            <router-link :to="`/discos`" active-class="active">Discos</router-link>
            <router-link :to="`/nosotros`" active-class="active">Sobre Nosotros</router-link>
        </nav>
    </header>
    <router-view/>
  </div>
</template>