import VueRouter from "vue-router";
// import User from "./pages/User.vue";
import Index from "./pages/Index.vue";

const router = new VueRouter({
    routes: [
        { path: '/', component: Index },
        // { path: '/user', component: User },
    ]
});

export default router;