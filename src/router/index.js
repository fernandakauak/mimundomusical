import { createRouter, createWebHistory } from 'vue-router';
import InicioVista from '../views/InicioVista.vue';
import NosotrosVista from '../views/NosotrosVista.vue';
import DiscoLista from '../views/DiscoLista.vue';
import DiscoDetalle from '../views/DiscoDetalle.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
        {
            path: '/',
            redirect: '/inicio'
        },
        {
            path: '/inicio',
            name:'inicio',
            component: InicioVista
        },
        {
            path: '/nosotros',
            name:'nosotros',
            alias:['/acercade','/somos'],
            component: NosotrosVista
        },
        {
            path: '/discos',
            name: 'discos',
            component: DiscoLista
        },
        {
            path: '/discos/:id/detalle',
            name: 'discoDetalle',
            component: DiscoDetalle,
            props: true
        },
    ]
});

export default router;