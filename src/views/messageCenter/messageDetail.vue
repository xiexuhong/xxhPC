<template lang="pug">
    #messageDetail(:style="style")
      .contain(:style="containStyle")
        .bread
          a-breadcrumb(separator=">")
            a-breadcrumb-item 系统通知
            a-breadcrumb-item 详情
        .content(v-html="html")
</template>
<script>
import { mapGetters } from 'vuex';
import { getMessageDetail } from '@/script/api';
import { deleteScrip } from '@/script/utils';
export default {
  data() {
    return {
      html: '',
    };
  },
  computed: {
    ...mapGetters(['deviceType']),
    style() {
      if (this.deviceType === 'desktop') {
        return `min-height:calc(100vh - 350px);`;
      } else {
        return `min-height:calc(100vh - 147px);`;
      }
    },
    containStyle() {
      if (this.deviceType === 'desktop') {
        return `min-height:calc(100vh - 390px);`;
      } else {
        return `min-height:calc(100vh - 187px);`;
      }
    },
  },
  methods: {
    async getDetail() {
      const res = await getMessageDetail({ article_id: this.$route.query.id });
      this.html = deleteScrip(res);
    },
  },
  created() {
    this.getDetail();
  },
};
</script>

<style lang="scss" scoped>
#messageDetail {
  background: rgba(246, 246, 246, 1);
  padding: 20px 0;
  .contain {
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    background: #fff;
    padding: 0 35px;
    .bread {
      height: 65px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
