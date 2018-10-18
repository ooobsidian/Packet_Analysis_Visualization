<template>
  <div class="hello">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane">
        <Divider orientation="left">抓包开关</Divider>
        <i-switch size="large" @on-change="handleSwitch" :value="switch1" style="margin-left: 35%">
          <span slot="open">开启</span>
          <span slot="close">停止</span>
        </i-switch>
        <Divider orientation="left">网卡信息</Divider>
        <Button type="primary" size="large" long class="btn">获取网卡信息</Button>
        <Divider orientation="left">Ipv4</Divider>
        <Button type="primary" size="large" long class="btn" to="/ipv4">Ipv4</Button>
        <Divider orientation="left">ARP</Divider>
        <Button type="primary" size="large" long class="btn" to="/arp">ARP</Button>
        <Divider orientation="left">可视化</Divider>
        <Button type="primary" size="large" long class="btn" to="/chart">图表展示</Button>
      </div>
      <div slot="right" class="demo-split-pane no-padding">
        <div slot="top" class="demo-split-pane">
          <Table border :loading="loading" :columns="columns1" :data="data1" height="100"></Table>
        </div>
        <div style="margin-left: 2%">
          刷新
          <img src="../assets/img/刷新.png" @click="Reload" style="width: 16px;height: 16px;"/>
        </div>
        <ve-pie :data="chartData1" :settings="chartSettings"></ve-pie>
      </div>

    </Split>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store/store'
  import {mapState} from 'vuex'

  export default {

    name: "chart",
    store,
    data() {
      return {
        split3: 0.15,
        loading: false,
        tcp: 0,
        columns1: [
          {
            title: 'Ipv4包数量',
            key: 'ipv4'
          },
          {
            title: 'TCP包数量',
            key: 'tcp'
          },
          {
            title: 'UDP包数量',
            key: 'udp'
          },
          {
            title: "ARP包数量",
            key: 'arp'
          }
        ],
        data1: [
          {
            ipv4: '',
            tcp: '',
            udp: '',
            arp: ''
          }
        ],
        chartSettings: {
          dimension: 'name',
          metrics: 'value',
          radius: 150
        },
        chartData1: {
          columns: ['name', 'value'],
          rows: [
            {
              name: 'TCP',
              value: 0
            },
            {
              name: 'UDP',
              value: 0
            },
            {
              name: 'ARP',
              value: 0
            },
            {
              name: "Other",
              value: 0
            }
          ]
        },
        chartData2: {
          columns: ['item', 'percent'],
          rows: [
            {
              'item': 'TCP',
              'percent': 0
            }
          ]
        },
        chartData3: {
          columns: ['item', 'percent'],
          rows: [
            {
              'item': 'UDP',
              'percent': 0
            }
          ]
        }
      }
    },
    created() {
      console.log("1")
      this.init();
    },
    computed: mapState(['switch1']),
    methods: {
      handleSwitch(val) {
        store.commit('CHANGE_STATE', val)
      },
      Reload(){
        this.init()
      },
      init() {
        this.loading = true
        axios({
          url: 'http://172.20.10.2:8081/api/count',
          method: 'get'
        }).then((res) => {
          console.log("2")
          if (res.data.code === 'SUCCESS') {
            this.data1[0].ipv4 = res.data.data.ipv4
            this.data1[0].tcp = res.data.data.tcp
            this.data1[0].udp = res.data.data.udp
            this.data1[0].arp = res.data.data.arp
            this.chartData1.rows[0].value = res.data.data.tcp
            this.chartData1.rows[1].value = res.data.data.udp
            this.chartData1.rows[2].value = res.data.data.arp
            this.chartData1.rows[3].value = res.data.data.ipv4 - (res.data.data.tcp + res.data.data.udp)
            this.chartData2.rows[0].percent = res.data.data.tcp / res.data.data.ipv4
            this.chartData3.rows[0].percent = res.data.data.udp / res.data.data.ipv4
          } else {
            this.$Notice.error({
              title: '获取失败'
            })
          }
          this.loading = false
        }).catch((e) => {
        })
      }
    }
  }
</script>
<style scoped>
  .btn {
    margin: 10px 0;
  }

  .hello {
    height: 100%;
  }

  .inputid {
    margin-right: 10px;
  }

  .demo-split-pane {
    padding: 10px;
  }

  .demo-split-pane.no-padding {
    height: 600px;
    padding: 0;
  }
</style>
