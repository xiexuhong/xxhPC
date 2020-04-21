<template lang="pug">
    #helpCenter
        a-row(type="flex" justify="center")
            a-col(:span='24')
                .search
                    a-input-search(placeholder="搜索" style="width: 200px，")
        .help_faq
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