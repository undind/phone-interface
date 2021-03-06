import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({ 
  mode: "history",
  routes 
});

// router.beforeEach((to, from, next) => {
//   console.log(localStorage.getItem("LAST_PAGE"))
// })

router.afterEach((to, from) => {
  localStorage.setItem("LAST_PAGE", from.name);
});

export default router;