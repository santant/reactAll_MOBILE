import config from '../commonApi'
import qs from 'qs'
// 优惠卷
const GETCOUPONCHELUE = `http://test2.artup.com/artup-weixin/material/queryMaterials/f44246652c0246b8a8ebee18890dce40?passportId=f44246652c0246b8a8ebee18890dce40&passId=f44246652c0246b8a8ebee18890dce40&clientCode=wechat&channelCode=arton&pageSize=100` // 获取优惠卷策略

// 礼品卡列表
export default {
  coupon: { // 优惠卷
    couponchelue: (paramJson) => { // 优惠卷策略
      return config.axios.get(GETCOUPONCHELUE, {params: Object.assign({}, config.params, paramJson)})
    }
  }
}
