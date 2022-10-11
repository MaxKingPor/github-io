



import indexVue from "@/views/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Base from "../views/base.vue";

const routes = [
    // {
    //     path: '/',
    //     component: indexVue,
    //     hidden: true,
    //     children: [
    //         {
    //             path: 'login',
    //             component: () => import('@/views/login.vue'),
    //             name: 'login',
    //             meta: { title: 'login', icon: 'user' }
    //         }
    //     ]
    // },
    {
        path: '/',
        component: Base,
        hidden: true,
        children: [
            {
                path: '',
                component: indexVue,
                name: 'index',
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
