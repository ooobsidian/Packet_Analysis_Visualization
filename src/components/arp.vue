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
        <!--<Button type="primary" size="large" long class="btn" to="/udp">UDP</Button>-->
        <Divider orientation="left">ARP</Divider>
        <Button type="primary" size="large" long class="btn" to="/arp">ARP</Button>
        <Divider orientation="left">可视化</Divider>
        <Button type="primary" size="large" long class="btn" to="/chart">图表展示</Button>
      </div>
      <div slot="right" class="demo-split-pane no-padding">
        <div slot="top" class="demo-split-pane">
          <Table stripe :columns="columns1" :data="data1" height="500"></Table>
        </div>
      </div>

    </Split>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store/store'
  import {mapState} from 'vuex'

  export default {
    name: "arp",
    store,
    data() {
      return {
        split3: 0.15,
        split4: 0.9,
        columns1:[
          {
            title:'硬件类型',
            key:'hardtype'
          },
          {
            title:'协议类型',
            key:'prototype'
          },
          {
            title:'硬件地址长度',
            key:'hlen'
          },
          {
            title:'协议地址长度',
            key:'plen'
          },
          {
            title:'标识',
            key:'ident'
          },
          {
            title:'发送者硬件地址',
            key:'senderHardaddr'
          },
          {
            title:'发送者协议地址',
            key:'senderProtoaddr'
          },
          {
            title:'目标硬件地址',
            key:'targetHardaddr'
          },
          {
            title:'目标协议地址',
            key:'targetProtoaddr'
          }
        ],
        data1:[
          {
            hardtype: 2,           //硬件类型
            prototype: 1,           //协议类型
            hlen: 111,           //硬件地址长度
            plen: 20,         //协议地址长度
            ident: 1,             //标识
            senderHardaddr: "XXX",    //发送者硬件地址
            senderProtoaddr: "XXX",     //发送者协议地址
            targetHardaddr: "XXX",             //目标硬件地址
            targetProtoaddr: "XXX",        //目标协议地址
          },
          {
            hardtype: 2,           //硬件类型
            prototype: 1,           //协议类型
            hlen: 111,           //硬件地址长度
            plen: 20,         //协议地址长度
            ident: 1,             //标识
            senderHardaddr: "XXX",    //发送者硬件地址
            senderProtoaddr: "XXX",     //发送者协议地址
            targetHardaddr: "XXX",             //目标硬件地址
            targetProtoaddr: "XXX",        //目标协议地址
          },
        ]
      }
    },
    computed: mapState(['switch1']),
    methods: {
      handleSwitch(val) {
        store.commit('CHANGE_STATE', val)
      },
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

