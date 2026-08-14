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
            <div class="titulo">
                <h1>{{ cd.artista }}</h1>
                <h2>{{ cd.nombre }}</h2>
            </div>
            <h2>Año de lanzamiento: {{ cd.anio }}</h2>
            <h3>Género: {{ cd.genero }}</h3>
            <div class="resena">
                <p>{{ cd.resena }}</p>
                <span>Canción Destacada: "{{ cd.destacada }}"</span>
            </div>
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
        color: purple;
    }

    .disco h1, .disco h2, .disco h3 {
        margin: 0;
    }

    .titulo {
        background-color: purple;
        width: 65%;
        border-radius: 50px;
        color: violet;
        padding: 2%;
        margin: 0 auto 2%;
    }

    .titulo h1 {
        font-size: 36px;
        margin-bottom: 2%;
    }

    .disco .resena {
        background-color: white;
        border: 2px solid purple;
        color: purple;
        padding: 2%;
        width: 80%;
        margin: 2% auto;
        font-size: 20px;
    }

    .disco .resena p {
        margin: 0 0 4%;
    }

    .disco span {
        font-weight: bold;
        font-size: 18px;
    }
</style>