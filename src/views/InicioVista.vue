<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<template>
    <section>
        <h1>¡Reciban la bienvenida a Discos Cachilupi! <br>
        Mi mundo musical</h1>
        <img src="../assets/indexdiscos.png" alt="Discos Cachilupi">
        <p>Aquí tendrán una selección de discos que me gustan con información de ellos y una canción que me encanta y no dudo en recomendar. Espero que los disfruten tanto como yo.</p>
        <h2>¡Discos Cachilupi para un día cachilupi!</h2>
    </section>
</template>

<style scoped>
    section {
        background-color: violet;
        width: 80%;
        margin: 2% auto;
        padding: 2%;
        border-radius: 10px;
    }

    section p {
        font-size: 20px;
    }

    img {
        border-radius: 250px;
        width: 35%;
    }
</style>