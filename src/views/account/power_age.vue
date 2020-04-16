<template>
  <main class="ant-layout-content" style="height: 100%; margin: 24px 24px 0px; padding-top: 0px;">
    <div class="breadcrumb ant-breadcrumb">
      <span>
        <span class="ant-breadcrumb-link">
          <a class="router-link-active">算龄</a>
        </span>
      </span>
    </div>
    <div>
      <a-card :bordered="false">
        <a-row>
          <a-col :span="3">
            <small>我的当前算龄</small>
            <p class="t_bold">450 TD</p>
          </a-col>
          <a-col :span="3">
            <small>历史最高算龄</small>
            <p class="t_bold">800 TD</p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <small>当前算领</small>
          </a-col>
          <a-col :span="12" class="t_right">
            <small class="color_y g_power">1000TD</small>
          </a-col>
        </a-row>
        <a-progress :percent="75" :showInfo="false" strokeColor="#FFB149" />
        <a-row>
          <a-col :span="12">
            <small>當前你的算齡未達到標準算齡， 暫未獲得雙挖礦機的資格</small>
          </a-col>
          <a-col :span="12" class="t_right">
            <small class="color_y">入门算龄</small>
          </a-col>
        </a-row>
      </a-card>
      <a-card :bordered="false" class="grade_div">
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
                  <span class="color_y">算龄(大于246132)</span>
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
                  <span class="color_y">算龄(74744-246132)</span>
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
                  <span class="color_y">算龄(23187-74744)</span>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="5">
                  <div class="grade">
                    <span>P4 矿霸</span>
                  </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="18">
                  <span class="color_y">算龄(1000-23187)</span>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </a-card>
      <a-row class="til_power">
        <p>您的算齡未達標，未獲得雙挖礦機資源，沒有機內排名區間，快去下單算力加速成長，成長越快，等級越高，權益越大</p>
      </a-row>
      <div class="btn_div">
        <a-button type="primary">加速成長</a-button>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 95% !important;
}
.ant-breadcrumb-link {
  font-size: 18px;
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
  margin-top: 8%;
}
.desc_grade .ant-row:nth-child(4) {
  margin-top: 10%;
}
.btn_div {
  text-align: center;
}
.til_power {
  background-color: #fafafa;
  padding: 2em 5% 1em;
}
.grade_div .ant-card-body {
  padding: 0;
}
</style>