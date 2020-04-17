<template lang="pug">  
    <v-chart :options="polar" :auto-resize="true"/>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'       //绘制不同的图表要引入不同的chart和component
import 'echarts/lib/component/polar'
import { setup } from '@/locales';
import { mapState } from 'vuex';


export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      polar: {
        // 指定图表的配置项和数据
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type:'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
      }
    };
  }
};
</script>

<style lang="scss" scoped>

.echarts {
  width: 100%;
  height: 100%;
}
</style>
