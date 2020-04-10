import { deviceEnquire, DEVICE_TYPE } from '@/script/device.js';
export const AppDeviceEnquire = {
  mounted() {
    const { $store } = this;
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.MOBILE:
          $store.commit('changeDeviceType', DEVICE_TYPE.MOBILE);
          break;
        default:
          $store.commit('changeDeviceType', DEVICE_TYPE.DESKTOP);
          break;
      }
    });
  },
};
