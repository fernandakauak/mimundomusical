<script setup>
    import { ref, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { discos } from '../discos.js'

    const router = useRouter()

    function verDetalle(id) {
        router.push({ name:'discoDetalle', params:{id} });
    }

    const genMusica = ref('')

    const generos = computed(() => {
        const todosGeneros = discos.map(p => p.genero)
        return [...new Set(todosGeneros)]
    })

    const discosFiltrados = computed(() => {
        if (!genMusica.value) {
            return discos
        }
        return discos.filter(p => p.genero === genMusica.value)
    })
</script>

<template>
    <div class="generos-cat">
        <label for="generos">Filtrar por género musical: </label>
        <select id="generos" v-model="genMusica">
            <option value="">Todos</option>
            <option v-for="gen in generos" :key="gen" :value="gen">
                {{ gen }}
            </option>
        </select>
    </div>

    <div class="lista">
        <div class="prod" v-for="disco in discosFiltrados" :key="disco.id">
            <img v-bind:src="disco.img" alt="disco.nombre">
            <h3>{{ disco.artista }} - {{ disco.nombre }}</h3>
            <button @click="verDetalle(disco.id)">Ver</button>
        </div>
    </div>
</template>

<style scoped>
    .lista {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .prod {
        padding: 1%;
        border: 1px solid white;
        border-radius: 8px;
        width: 20%;
        margin: 1%;
        background-color: violet;
    }

    .generos-cat {
        background-color: purple;
        padding: 1%;
        width: 60%;
        margin: 1% auto 2%;
        border-radius: 20px;
        font-size: 20px;
        color: violet;
    }

    .generos-cat select {
        padding: 1%;
        margin: 0 1%;
        border-radius: 10px;
    }

    .prod img {
        width: 100%;
    }

    .prod h3 {
        width: 100%;
    }

    .prod button {
        background-color: purple;
        color: white;
        border: none;
        padding: 2%;
        border-radius: 6px;
        margin-top: 5%;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }
</style>