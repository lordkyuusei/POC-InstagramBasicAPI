import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Oauth from "../components/Oauth.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HelloWorld
    },
    {
        path: "/oauth",
        name: "oauth",
        component: Oauth,
        props: route => ({
            token: route.query.access_token,
            code: route.query.code,
        })
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

  export default router;