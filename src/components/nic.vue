<template>
  <div class="hello">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane">
        <Divider orientation="left">抓包开关</Divider>
        <i-switch @on-change="handleSwitch" :value="switch1" size="large" style="margin-left: 35%">
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
          <Table stripe :loading="loading" :columns="columns1" :data="data1" height="500"></Table>
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
    name: 'nic',
    store,
    data() {
      return {
        split3: 0.15,
        loading: false,
        columns1: [
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: 'Address1',
            key: 'address'
          },
          {
            title: 'Address2',
            key: 'otherAddress'
          }
        ],
        data1: []
      }
    },
    computed: mapState(['switch1']),
    created() {
      this.getNicInfo();
    },
    methods: {
      handleSwitch(val) {
        store.commit('CHANGE_STATE', val)
      },
      getNicInfo() {
        this.loading = true,
          axios({
            url: 'http://172.20.10.2:8081/api/network/list',
            method: 'get'
          }).then((res) => {
            if (res.data.code === 'SUCCESS') {
              this.data1 = res.data.data
            } else {
              this.$Notice.error({
                title: '抓取失败'
              })
            }
            this.loading = false
          }).catch((e) => {
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
