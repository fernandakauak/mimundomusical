<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<template>
    <section>
        <h1>Discos Cachilupi</h1>
        <h2>Discos geniales porque yo lo digo</h2>
        <img src="../assets/nosotros.png" alt="Nosotros">
        <br>
        <p>Este es un catálogo en expansión de mis discos favoritos. Acá encontrarán varios géneros musicales interesantes, bandas con mucho que ofrecer y horas y horas de música por descubrir. Más que mostrar lo último o lo más popular, mi foco está en lo que me llena, inspera y hace muy feliz, porque esa es la música que hay que escuchar (más allá de lo que digan las masas porque no siempre estamos de acuerdo con el de al lado musicalmente hablando).</p>
        <p>Así que ya sabes, si quieres un disco genial, ven a Discos Cachilupis, mi mundo musical.</p>
    </section>
</template>

<style scoped>
    section {
        padding: 2%;
        background-color: violet;
        width: 80%;
        margin: 1% auto;
        border-radius: 10px;
        color: purple;
        border: 1px solid white;
    }

    section h1, section h2 {
        margin: 0;
    }

    section img {
        margin: 2% auto;
    }

    section p {
        width: 80%;
        margin: auto;
        text-align: left;
        line-height: 150%;
        font-size: 20px;
    }
</style>