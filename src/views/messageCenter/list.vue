<template lang="pug">
    #messageList
        a-list(itemLayout="horizontal" :dataSource="list")
            a-list-item(slot="renderItem" slot-scope="item, index" rowKey="article_id")
                a.detail(slot="extra") 查看详情
                a-list-item-meta(:title="item.article_title")
                    .content(slot="description")
                        .text {{item.article_abstract}}
                        .time {{item.article_time}}
                    .iconBox(slot="avatar")
                        span.icon
        .page(v-if="!isComponent")
            a-pagination(:total="totalMessage" showLessItems @change="pageChange" :current="curpage")
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    isComponent: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      curpage: 0,
    };
  },
  watch: {
    totalMessage(val) {
      // TODO ant-vue curpage初始为1得话 total从0开始变化时 curpage点击前样式显示不出当前页
      if (val > 0) {
        this.curpage = 1;
      } else {
        this.curpage = 0;
      }
    },
  },
  computed: {
    ...mapGetters(['messageList', 'messageHeader', 'totalMessage']),
    list() {
      return this.isComponent ? this.messageHeader : this.messageList;
    },
  },
  methods: {
    pageChange(curpage) {
      this.curpage = curpage;
      this.$store.dispatch('requestMessageList', { curpage });
    },
  },
};
</script>

<style lang="scss" scoped>
#messageList {
  .iconBox {
    box-sizing: border-box;
    padding-top: 8px;
    .icon {
      display: block;
      width: 6px;
      height: 6px;
      background: rgba(232, 67, 67, 1);
      border-radius: 50%;
    }
  }
  /deep/.ant-list-item-meta-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
  }
  .page {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
