<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 12px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <a class="router-link-active">算龄</a>
        </span>
      </span>
    </div>
    <div>
      <a-card :bordered="false" :bodyStyle="{ padding: 0 }">
        <a-row>
          <a-col :span="8">
            <small>我的当前算龄</small>
            <p class="t_bold">{{ datas.my_td }} TD</p>
          </a-col>
          <a-col :span="8">
            <small>历史最高算龄</small>
            <p class="t_bold">{{ datas.history_max }} TD</p>
          </a-col>
        </a-row>
        <a-row class="myTD">
          <div :class="{'isHide': datas.my_td > initAge}">
            <small>当前算领</small>
          </div>
          <div class="t_right" v-if="datas.my_td < initAge">
            <small class="color_y g_power">{{ datas.my_td < initAge ? initAge : datas.my_add }} TD</small>
          </div>
          <div v-else :style="'margin-left: ' + (range(datas.my_td, datas.my_add, datas.people_add)-8) + '%'">
            <small class="color_y g_power">{{ datas.my_td < initAge ? initAge : datas.my_add }} TD</small>
          </div>
        </a-row>
        <a-progress :percent="range(datas.my_td, datas.my_add, datas.people_add)" :showInfo="false" strokeColor="#FFB149" />
        <a-row>
          <a-col :span="12">   
            <small v-if='datas.my_td < initAge'>當前你的算齡未達到標準算齡， 暫未獲得雙挖礦機的資格</small>
            <small v-else  class="color_y">人均增长速度 {{ datas.people_add }} TD.您的当前增长速度 {{ datas.my_add }} TD</small>
          </a-col>
          <a-col :span="12" class="t_right">
            <small class="color_y">{{ datas.my_td < initAge ? '入门算龄' : datas.people_add +
              " TD" }}</small>
          </a-col>
        </a-row>
      </a-card>
      <a-card :bordered="false" class="grade_div" :bodyStyle="{ padding: 0 }">
        <h2>收益區間排名</h2>
        <a-row>
          <a-col :span="15">
            <div class="img_center">
              <img src="../../assets/image/account/iconshouyiqujian.png" alt />
            </div>
          </a-col>
          <a-col :span="7" class="desc_grade">
            <div class="txt_power">
              <a-row>
                <a-col :span="5">
                  <div class="grade">
                    <span>P1 矿霸</span>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="18">
                  <span class="color_y">算龄(大于{{ datas.percent_td.td_p99 }})</span>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="5">
                  <div class="grade">
                    <span>P2 矿霸</span>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="18">
                  <span class="color_y">算龄({{ datas.percent_td.td_p94 }}-{{ datas.percent_td.td_p99 }})</span>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="5">
                  <div class="grade">
                    <span>P3 矿霸</span>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="18">
                  <span class="color_y">算龄({{ datas.percent_td.td_p80 }}-{{ datas.percent_td.td_p94 }})</span>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="5">
                  <div class="grade">
                    <span>P4 矿霸</span>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="18" class="img_own">
                  <span class="color_y">算龄({{ initAge }}-{{ datas.percent_td.td_p80 }})</span>
                  <div class="img_div">
                    <a-tooltip placement="topLeft" title="I’m here" :defaultVisible=true>
                      <img :src="datas.avatar" alt="" />
                    </a-tooltip>
                  </div>
                  
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </a-card>
      <a-alert
        message="您的算齡未達標，未獲得雙挖礦機資源，沒有機內排名區間，快去下單算力加速成長，成長越快，等級越高，權益越大"
        type="error" v-if="datas.my_td < initAge"
      />
      <a-alert
        :message="'您目前排名在'+ isRank(datas.my_td, datas.percent_td.td_p99, datas.percent_td.td_p94,
                  datas.percent_td.td_p80, initAge) +'区间，日增长速度比人均增长速度少'+ addSpeed(data.people_add, data.my_add) +'TD。快去下单算力加速成长，等级越高，权益越大。'"
        type="error" v-else-if="datas.my_td > initAge && addSpeed(data.people_add, data.my_add) > 0"
      />
      <a-alert
        :message="'您目前排名在'+ isRank(datas.my_td, datas.percent_td.td_p99, datas.percent_td.td_p94,
                  datas.percent_td.td_p80, initAge) +'区间，日增长速度比人均增长速度多'+ addSpeed(data.people_add, data.my_add) +'TD。坚持成长，等级越高，权益越大。'"
        type="error"  v-else-if="datas.my_td > initAge && addSpeed(data.people_add, data.my_add) < 0"
      />
      <div class="btn_div">
        <a-button type="primary" @click="goRent()">加速成長</a-button>
      </div>
    </div>
  </main>
</template>
<script>
import { powerAge } from '@/script/api';

export default {
  data() {
    return {
      datas: {
        percent_td: {}
      },
      initAge: 1000
    };
  },
  computed: {
    range: function () {
      //滚动条显示长度
      return function (thisval, myAdd, peopleAdd) {
        if (Number(thisval) == 0) {
          return 0;
        } else if (Number(thisval) < 1000) {
          return ((Number(thisval) / 1000) * 100);
        } else if (
          Number(thisval) >= 1000 &&
          Number(myAdd) < Number(peopleAdd)
        ) {
          return ((myAdd / peopleAdd) * 100);
        } else {
          return 80;
        }
      }
    },
    isRank: function () {
      //排名区间
      return function (powerAge, td_p99, td_p94, td_p80, in_td) {
        var n_powerAge = Number(powerAge),
          n_td_p99 = Number(td_p99),
          n_td_p94 = Number(td_p94),
          n_td_p80 = Number(td_p80),
          n_in_td = Number(in_td);
        if (n_td_p99 <= n_powerAge) {
          return "P1";
        } else if (n_td_p94 <= n_powerAge) {
          return "P2";
        } else if (n_td_p80 <= n_powerAge) {
          return "P3";
        } else if (n_in_td <= n_powerAge) {
          return "P4";
        }
      };
    },
    addSpeed: function () {
      //增长速度
      return function (average, myAdd) {
        return Number(average) - Number(myAdd);
      };
    },
  },
  async created() {
    const { datas } = await powerAge();
      this.datas = datas;
      console.log("suanling: ", datas);
  },
  methods: {
    goRent(){
      this.$router.push('/hashrateMarket');
    }
  }
}
</script>
<style scoped>
main {
  width: 95% !important;
}
.ant-breadcrumb-link,
h2 {
  font-size: 18px;
}
h2 {
  margin-top: 24px;
}
.ant-card .ant-card-body {
  padding: 20px 0 !important;
}
.color_y {
  color: #ffb757;
}
.t_right {
  text-align: right;
}
small {
  color: #999999;
}
.t_bold {
  color: #262626;
  font-weight: bold;
  font-size: 18px;
}
.g_power {
  background: url('~@/assets/image/account/icondabiaoTD.png') no-repeat;
  background-size: 100% 100%;
  padding: 0.5% 1% 1%;
}
.img_center {
  text-align: right;
}
.grade {
  background-color: #ffbd3f;
  text-align: center;
  color: #fff;
}
.desc_grade .ant-row:nth-child(1) {
  margin-top: 10%;
}
.desc_grade .ant-row:nth-child(2) {
  margin-top: 5%;
}
.desc_grade .ant-row:nth-child(3) {
  margin-top: 9%;
}
.desc_grade .ant-row:nth-child(4) {
  margin-top: 11%;
}
.btn_div {
  text-align: center;
  margin: 2%;
}
.til_power {
  background-color: #fafafa;
  padding: 2em 5% 1em;
}
.grade_div .ant-card-body {
  padding: 0;
}
.img_own .img_div{
  display: inline;
  margin-left: 3%;
}
.img_own img {
  display: inline-block;
  width: 10%;
  border-radius: 50%;
}
.myTD {
  display: flex;
}
.myTD div{
  min-width: 50%;
}
.isHide{
  display: none;
}
</style>
