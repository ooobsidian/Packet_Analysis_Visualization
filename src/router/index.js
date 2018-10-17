import Vue from 'vue'
import Router from 'vue-router'
import Nic from '@/components/nic'
import Root from '@/components/root'
import Tcp from '@/components/tcp'
import Udp from '@/components/udp'
import Arp from '@/components/arp'
import Chart from '@/components/chart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/nic',
      name: 'nic',
      component: Nic
    },
    {
      path: '/tcp',
      name: 'tcp',
      component: Tcp
    },
    {
      path: '/udp',
      name: 'udp',
      component: Udp
    },
    {
      path: '/arp',
      name: 'arp',
      component: Arp
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    }
  ]
})
