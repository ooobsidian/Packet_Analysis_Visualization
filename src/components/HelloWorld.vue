<template>
  <div class="hello">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane">
        <Button type="primary" size="large" long>获取网卡信息</Button>
        <div style="display: flex;margin: 20px 0">
          <Input v-model="value1" size="large" class="inputid" placeholder="输入序号"/>
          <Button type="primary" size="large">获取</Button>
        </div>
        <Button type="primary" size="large" long>图表展示</Button>
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
    name: 'HelloWorld',
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
