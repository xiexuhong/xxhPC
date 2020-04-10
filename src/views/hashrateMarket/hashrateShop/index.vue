<template>
  <!-- 算力市场/算力商城首页 -->
  <div class="hashContainer">
    <a-row class="hashContent" type="flex" justify="center" align="top">
      <a-col :span="18">
        <a-row>
          <a-col :span="24">
            <ul class="hashHeader">
              <li>
                <img src="../../../../public/hashrateMarket/btc.png" alt="icon" />
              </li>
              <li>BTC 30天算力包</li>
              <li>合约限期</li>
              <li>30天</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="hashBody">
          <a-col :span="8">
            <ul>
              <li>单份价格</li>
              <li style="color:#ffab32">123134521231.0000</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>单份合约算力</li>
              <li>1+2+5+5+5</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>日挖矿收益</li>
              <li>约0.18hds</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="hashBody">
          <a-col :span="8">
            <ul>
              <li>剩余算力</li>
              <li>48T</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>单次下单限额</li>
              <li>5T</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>开挖时间</li>
              <li>19/02/2020</li>
            </ul>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="6">
        <a-row class="showDetail">
          <a-col :span="24">
            <a href="#">查看详情 ></a>
          </a-col>
        </a-row>
        <a-row class="charge">
          <a-col :span="24">
            <ul>
              <li>
                <a-button size="large" block>立即购买</a-button>
              </li>
            </ul>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="hashContent" type="flex" justify="center" align="top">
      <a-col :span="18">
        <a-row>
          <a-col :span="24">
            <ul class="hashHeader">
              <li>
                <img src="../../../../public/hashrateMarket/btc.png" alt="icon" />
              </li>
              <li>BTC 30天算力包</li>
              <li>合约限期</li>
              <li>30天</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="hashBody">
          <a-col :span="8">
            <ul>
              <li>单份价格</li>
              <li style="color:#ffab32">123134521231.0000</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>单份合约算力</li>
              <li>1+2+5+5+5</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>日挖矿收益</li>
              <li>约0.18hds</li>
            </ul>
          </a-col>
        </a-row>
        <a-row class="hashBody">
          <a-col :span="8">
            <ul>
              <li>剩余算力</li>
              <li>48T</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>单次下单限额</li>
              <li>5T</li>
            </ul>
          </a-col>
          <a-col :span="8">
            <ul>
              <li>开挖时间</li>
              <li>19/02/2020</li>
            </ul>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="6">
        <a-row class="showDetail">
          <a-col :span="24">
            <a href="#">查看详情 ></a>
          </a-col>
        </a-row>
        <a-row class="charge">
          <a-col :span="24">
            <ul>
              <li>
                <a-button size="large" block>立即购买</a-button>
              </li>
            </ul>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hashContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-all;
  ul {
    margin: 10px;
  }
}
.hashContent {
  width: 60%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
}
.hashHeader {
  li {
    display: inline;
    margin: 0 4px;
  }
  li:nth-child(1) img {
    height: 27px;
    width: 27px;
    position: relative;
    top: -12px;
  }
  li:nth-child(2) {
    font-size: 24px;
    color: #262626;
  }
  li:nth-child(3) {
    font-size: 12px;
    color: #ffffff;
    background-color: #ff9d32;
    padding: 5px;
  }
  li:nth-child(4) {
    font-size: 12px;
    color: #ff9d32;
    background-color: #fff6ec;
    padding: 5px;
  }
}
.showDetail {
  padding-top: 20px;
  text-align: right;
  a {
    color: #ffab32;
    font-size: 14px;
  }
}
.hashBody ul li {
  padding: 5px;
}
.hashBody ul li:nth-child(1) {
  font-size: 14px;
  color: #999999;
}
.hashBody ul li:nth-child(2) {
  font-size: 20px;
  font-weight: 600;
  color: #262626;
}
.charge {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
  ul {
    margin: 0px;
  }
  .ant-btn {
    background-color: #ffab32;
    border-radius: 2px;
    color: #ffffff;
  }
}
@media all and (max-width: 1000px) {
  .hashContent {
    width: 90%;
  }
}
</style>