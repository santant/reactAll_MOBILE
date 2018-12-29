import config from '../commonApi'
import qs from 'qs'
// 审核列表
const reviewsList = `${config.HOST2}pcloud-microcourse-webapp/reviews/pageList.html`
// 审核作品
const reviewSave = `${config.HOST2}pcloud-microcourse-webapp/reviews/reviewScore.html`
// 审核作品修改
const reviewSaveEdit = `${config.HOST2}pcloud-microcourse-webapp/reviews/reviewEdit.html`

// 评审进度管理
const reviewManagerList = `${config.HOST2}pcloud-microcourse-webapp/reviews/manager.html`

export default {
  reviews: { // 审核
    reviewList: (paramJson) => { // 审核列表
      return config.axios.post(reviewsList, qs.stringify(paramJson))
    },
    reviewSave: (paramJson) => { // 作品审核保存
      return config.axios.post(reviewSave, paramJson)
    },
    reviewSaveEdit: (paramJson) => { // 审核作品修改
      return config.axios.post(reviewSaveEdit, paramJson)
    },
    reviewManagerList: (paramJson) => { // 评审进度管理
      return config.axios.post(reviewManagerList, qs.stringify(paramJson))
    }
  }
}
