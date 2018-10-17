import Vue from 'vue'
import Router from 'vue-router'
import Nic from '@/components/nic'
import Root from '@/components/root'
import Tcp from '@/components/tcp'
import Udp from '@/components/udp'
import Arp from '@/components/arp'
import Chart from '@/components/chart'
import Ipv4 from '@/components/ipv4'

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
      path: '/ipv4',
      name: 'ipv4',
      component: Ipv4
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
