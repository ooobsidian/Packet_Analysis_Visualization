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
        <Button type="primary" size="large" long class="btn" to="/tcp">TCP</Button>
        <Button type="primary" size="large" long class="btn" to="/udp">UDP</Button>
        <Divider orientation="left">ARP</Divider>
        <Button type="primary" size="large" long class="btn" to="/arp">ARP</Button>
        <Divider orientation="left">可视化</Divider>
        <Button type="primary" size="large" long class="btn" to="/chart">图表展示</Button>
      </div>
      <div slot="right" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">
            <Table stripe :columns="columns1" :data="data1" height="300"></Table>
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
    name: "arp",
    data() {
      return {
        split3: 0.15,
        split4: 0.9,
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

