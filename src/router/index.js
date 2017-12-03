import Vue from 'vue';
import Router from 'vue-router';
import CurrencyListing from '@/components/CurrencyListing';
import CurrencyDetails from '@/components/CurrencyDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/crypto',
      name: 'CurrencyListing',
      component: CurrencyListing,
    },
    {
      path: '/crypto/:id',
      name: 'CurrencyDetails',
      component: CurrencyDetails,
    },
  ],
});
