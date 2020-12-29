import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [

    {
        name: "web-love-stock",
        path: '/web/love-stock',
        component: () => import("@/components/web/love-stock"),
        meta: {
            openKeys: ['1'],
            selectedKeys: ['11']
        }
    },
    {
        name: "web-live",
        path: '/web/live',
        component: () => import("@/components/web/live"),
        meta: {
            openKeys: ['1'],
            selectedKeys: ['12']
        }
    },
    {
        name: "android-love-stock",
        path: '/android/love-stock',
        component: () => import("@/components/android/love-stock"),
        meta: {
            openKeys: ['2'],
            selectedKeys: ['21']
        }
    },
    {
        name: "ios-love-stock",
        path: '/ios/love-stock',
        component: () => import("@/components/ios/love-stock"),
        meta: {
            openKeys: ['3'],
            selectedKeys: ['31']
        }
    },



    {
        path: "*",
        redirect: '/web/love-stock',
    },
];

const router = new Router({
    mode: 'history',
    base: '/',
    routes,
});

export default router;