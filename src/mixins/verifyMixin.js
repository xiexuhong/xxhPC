import { mapGetters, mapMutations } from 'vuex';
import { getVerifyStatus } from '@/script/api';

export const verifyMixin = {
  computed: {
    ...mapGetters(['verifyStatus']),
  },
  methods: {
    ...mapMutations(['hasVerified']),
    async requestVerifyStatus(cb) {
      if (this.verifyStatus) {
        cb && cb();
      } else {
        const { datas } = await getVerifyStatus();
        const { status_code, desc } = datas;
        switch (status_code) {
          case 1:
            this.hasVerified();
            cb && cb();
            break;
          case -2:
          case -1:
            this.$message.warn(desc);
            this.$router.push('/');
            break;
          case 0:
            this.$message.warn(desc);
            break;
        }
      }
    },
  },
};
