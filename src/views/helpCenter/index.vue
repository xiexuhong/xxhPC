<template lang="pug">
    #helpCenter
        a-row.search(type="flex" justify="center")
            a-col(:span='24')
                .search
                    a-input-search(placeholder="搜索")
        .help_faq
            h2.title_fqa
                img(src='../../assets/image/iconquestion.png')
                span 常见问题
            a-collapse(accordion)
                a-collapse-panel(header="·我们是谁？" key="1")
                    p 1.RR Mine是面向公众开放的全球数字资产积累配置平台,且 矿场内共享专业运算设备和技术，使用户资产配置更经济 更灵活，人人投入无风险。
                    p 2.公司实力雄厚，海外子公司遍布全球发达国家或地区。专 业管理团队精选数字矿产，实时维护动态监控运算能力， 智能标准出矿量让资产更可控，数据透明，行情动向一手 掌控，可委托平台进行资产交易广告发布，会员参与信任 度有保障。
                a-collapse-panel(header="·在RR Mine矿工如何挖矿的？" key="2" :disabled="false")
                    p 1.RR Mine是面向公众开放的全球数字资产积累配置平台,且 矿场内共享专业运算设备和技术，使用户资产配置更经济 更灵活，人人投入无风险。
                    p 2.公司实力雄厚，海外子公司遍布全球发达国家或地区。专 业管理团队精选数字矿产，实时维护动态监控运算能力， 智能标准出矿量让资产更可控，数据透明，行情动向一手 掌控，可委托平台进行资产交易广告发布，会员参与信任 度有保障。
                a-collapse-panel(header="·如何开始挖矿" key="3")
                    p 如何开始挖矿
</template>
<style lang='scss' scoped>
.search {
  background: url('~@/assets/image/iconbghelp.png') no-repeat;
  background-size: 100% 100%;
  min-height: 25vh;
}
.ant-input-search {
  width: 60%;
  margin-left: 20%;
  margin-top: 10vh;
}
.title_fqa {
  margin: 2% auto;
  padding-left: 12px;
  span {
    margin-left: 1%;
    font-weight: bold;
    vertical-align: middle;
    font-size: 16px;
  }
}
</style>