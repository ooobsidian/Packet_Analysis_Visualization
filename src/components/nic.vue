<template>
  <div class="hello">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane">
        <div style="display: flex">
          <Button type="success" style="margin-right: 30px;margin-left: 20%">开始</Button>
          <Button type="error">停止</Button>
        </div>
        <Divider orientation="left">网卡信息</Divider>
        <Button type="primary" size="large" long class="btn">获取网卡信息</Button>
        <Divider orientation="left">Ipv4</Divider>
        <Button type="primary" size="large" long class="btn" to="/tcp">获取TCP</Button>
        <Button type="primary" size="large" long class="btn" to="/udp">获取UDP</Button>
        <Divider orientation="left">ARP</Divider>
        <Button type="primary" size="large" long class="btn" to="/arp">获取ARP</Button>
        <Divider orientation="left">可视化</Divider>
        <Button type="primary" size="large" long class="btn" to="/chart">图表展示</Button>
      </div>
      <div slot="right" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">
            <Table stripe :columns="columns1" :data="data1"></Table>
          </div>
          <div slot="bottom" class="demo-split-pane">
            Bottom Pane
          </div>
        </Split>
      </div>

    </Split>
  </div>
</template>

<script>
  export default {
    name: 'nic',
    data() {
      return {
        split3: 0.15,
        split4: 0.9,
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
        data1: [
          {
            id: 1,
            name: "wlp5s0",
            address: "192.168.50.223",
            otherAddress: "fe80:0:0:0:b00b:2a93:319e:bc76"
          },
          {
            id: 2,
            name: "any",
            address: "192.168.50.223",
            otherAddress: "fe80:0:0:0:b00b:2a93:319e:bc76"
          },
          {
            id: 3,
            name: "lo",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 4,
            name: "enp3s0",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 5,
            name: "bluetooth0",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 6,
            name: "nflog",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 7,
            name: "nfqueue",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 8,
            name: "usbmon1",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          },
          {
            id: 9,
            name: "usbmon2",
            address: "127.0.0.1",
            otherAddress: "0:0:0:0:0:0:0:1"
          }
        ]
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
