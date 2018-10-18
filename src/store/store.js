import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      switch1: false
    },
    mutations: {
      CHANGE_STATE(state, val) {
        state.switch1 = val
        if(val===true)
        {
          console.log("1")
          axios({
            url:'http://172.20.10.2:8081/api/thread/begin',
            method:'get'
          }).then((res)=>{
            if (res.data.code === 'SUCCESS') {
              this.$Message.success("已开始抓包")
            }else{
              this.$Message.error("出现错误")
            }
          }).catch((e)=>{})
        }
        if(val===false)
        {
          console.log("0")
          axios({
            url:'http://172.20.10.2:8081/api/thread/stop',
            method:'get'
          }).then((res)=>{
            if (res.data.code === 'SUCCESS') {
              this.$Message.success("已停止抓包")
            }else{
              this.$Message.error("出现错误")
            }
          }).catch((e)=>{})
        }
      }
    }
  }
)
