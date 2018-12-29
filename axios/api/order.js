import config from '../commonApi'
import qs from 'qs'

const CREATE_ORDER = `${config.HOST}artup-weixin/order/createOrder` // 创建订单
const ORDER_LIST = `${config.HOST}/artup-weixin/material/queryMaterials/f44246652c0246b8a8ebee18890dce40?passportId=f44246652c0246b8a8ebee18890dce40&passId=f44246652c0246b8a8ebee18890dce40&clientCode=wechat&channelCode=arton&pageSize=100&passportId=f44246652c0246b8a8ebee18890dce40&clientCode=wechat&channelCode=arton`// 测试素材库接口
export default {
  createOrder: (paramJson) => {
    return config.axios.post(CREATE_ORDER, qs.stringify(Object.assign({}, config.params, paramJson)))
  },
  orderList: (paramJson) => {
    return config.axios.get(ORDER_LIST + localStorage['userDbId'],
      {
        params: Object.assign({}, config.params, paramJson)
      }
    )
  }
}
