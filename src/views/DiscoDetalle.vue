<script setup>
    import { computed } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { discos } from '../discos.js'
    const route  = useRoute();
    const router = useRouter();

    const props = defineProps({
        id: String
    });

    const cd = computed(()=>{
        return discos.find((d)=> d.id === Number(props.id));
    });
</script>

<template>
    <div class="ficha">
        <button class="volver" @click="router.back()">Volver a Catálogo</button>
        <div class="disco">
            <img v-bind:src="cd.img" alt="cd.nombre">
            <h1 class="emoji">{{ cd.artista }} - {{ cd.nombre }}</h1>
            <h2>{{ cd.anio }}</h2>
            <h3>{{ cd.genero }}</h3>
            <p>Canción Destacada: <span>{{ cd.destacada }}</span></p>
        </div>
    </div>
</template>

<style scoped>
    .ficha {
        text-align: center;
    }

    .volver {
        background-color: purple;
        color: violet;
        border: none;
        padding: 2%;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 18px;
    }

    .disco {
        margin: 2% auto;
        max-width: 80%;
        background-color: violet;
        border: 1px solid white;
        border-radius: 12px;
        padding: 2%;
    }

    .disco h1, .disco h2, .disco h3 {
        margin: 0;
    }

    .disco p {
        background-color: white;
        border: 2px solid purple;
        color: purple;
        padding: 2%;
        width: 80%;
        margin: 2% auto;
        font-size: 20px;
    }

    .disco p span {
        font-weight: bold;
        font-size: 18px;
    }
</style>