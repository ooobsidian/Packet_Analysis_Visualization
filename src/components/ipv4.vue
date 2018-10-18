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
        <Button type="primary" size="large" long class="btn" to="/nic">获取网卡信息</Button>
        <Divider orientation="left">Ipv4</Divider>
        <Button type="primary" size="large" long class="btn" to="/ipv4">Ipv4</Button>
        <Divider orientation="left">ARP</Divider>
        <Button type="primary" size="large" long class="btn" to="/arp">ARP</Button>
        <Divider orientation="left">可视化</Divider>
        <Button type="primary" size="large" long class="btn" to="/chart">图表展示</Button>
      </div>
      <div slot="right" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">
            <div style="display: flex;">
              <div style="margin-left: 10px;margin-bottom: 5px">
                <a href="/ipv4">全部</a>
                <Divider type="vertical"/>
                <a href="/tcp">TCP</a>
                <Divider type="vertical"/>
                <a href="udp">UDP</a>
              </div>
              <div style="margin-left: 70%;">
                表中共有{{this.dataLength}}条数据
              </div>
              <img src="../assets/img/刷新.png" @click="Reload" style="width: 16px;height: 16px;margin-left: 10%"/>
            </div>
            <Table border :loading="loading" stripe :columns="columns1" :data="data1" height="500"></Table>
          </div>
          <div slot="bottom" class="demo-split-pane">
            <Table border :columns="columns2" :data="data2"></Table>
          </div>
        </Split>
      </div>
    </Split>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '../store/store'
  import {mapState} from 'vuex'

  export default {
    name: "ipv4",
    store,
    data() {
      return {
        split3: 0.15,
        split4: 0.9,
        loading: false,
        dataLength: 0,
        sortId: [],
        protocol: [],
        columns1: [
          {
            title: 'IP版本',
            key: 'version'
          },
          {
            title: '服务类型',
            key: 'rsvTos',
          },
          {
            title: '优先级',
            key: 'priority'
          },
          {
            title: '长度',
            key: 'length'
          },
          {
            title: '标识',
            key: 'ident'
          },
          {
            title: 'More Frag?',
            key: 'moreFrag'
          },
          {
            title: 'Don\'t Frag?',
            key: 'dontFrag'
          },
          {
            title: '片偏移',
            key: 'offset'
          },
          {
            title: '生存时间',
            key: 'hopLimit'
          },
          {
            title: '协议',
            key: 'protocol'
          },
          {
            title: '源IP',
            key: 'srcIp'
          },
          {
            title: '目的IP',
            key: 'dstIp'
          },
          {
            title: '动作',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log("#$#$")
                    console.log(this.protocol)
                    axios({
                      url: 'http://172.20.10.2:8081/api/ipv4/tcpudp',
                      method: 'get',
                      params: {
                        protocol: this.protocol[params.index],
                        sort_id: this.sortId[params.index]
                      }
                    }).then((res) => {
                      if (res.data.code === 'SUCCESS') {
                        this.data2 = res.data.data
                      } else {
                        this.$Notice.error({
                          title: '查看失败'
                        })
                      }
                    }).catch((e) => {
                    })
                  }
                }
              }, '查看详情')
            }
          }
        ],
        columns2: [
          {
            title: '源端口',
            key: 'srcPort'
          },
          {
            title: '目的端口',
            key: 'dstPort'
          },
          {
            title: 'URG',
            key: 'urg'
          },
          {
            title: 'ACK',
            key: 'ack'
          },
          {
            title: 'PSH',
            key: 'psh'
          },
          {
            title: 'RST',
            key: 'rst'
          },
          {
            title: 'SYN',
            key: 'syn'
          },
          {
            title: 'FIN',
            key: 'fin'
          },
          {
            title: '窗口大小',
            key: 'window'
          },
          {
            title: '紧急指针',
            key: 'urgentPointer'
          },
          {
            title: '数据',
            key: 'data'
          }
        ],
        data1: [],
        data2: []
      }
    },
    computed: mapState(['switch1']),
    created() {
      this.getAllIpv4();
    },
    methods: {
      handleSwitch(val) {
        store.commit('CHANGE_STATE', val)
      },
      Reload() {
        this.getAllIpv4();
      },
      getAllIpv4() {
        this.loading = true
        axios({
          url: 'http://172.20.10.2:8081/api/ipv4/list',
          method: 'get'
        }).then((res) => {
          if (res.data.code === 'SUCCESS') {
            this.data1 = res.data.data
            console.log(res.data.data)
            for (var i = 0; i < res.data.data.length; i++) {
              this.protocol[i] = res.data.data[i].protocol
              if (res.data.data[i].protocol === 6) {
                this.data1[i].protocol = 'TCP'
              } else if (res.data.data[i].protocol == 17) {
                this.data1[i].protocol = 'UDP'
              }
              this.sortId[i] = res.data.data[i].sortId
            }
            this.dataLength += res.data.data.length
            this.loading = false
          } else {
            this.$Notice.error({
              title: '抓取失败'
            })
          }
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
