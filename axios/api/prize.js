import config from '../commonApi'
import qs from 'qs'

// 奖项管理赛事列表
const contestList = `${config.HOST}pcloud-microcourse-webapp/prizeManager/contestList.html`

// 奖项管理作品列表
const opusList = `${config.HOST}pcloud-microcourse-webapp/prizeManager/opusList.html`

// 跳转到评奖/修改页面
const toPrize = `${config.HOST}pcloud-microcourse-webapp/prizeManager/toPrize.html`

// 中奖列表
const prizeList = `${config.HOST}pcloud-microcourse-webapp/prizeManager/prizeList.html`

// 中奖名单
const prizeNameList = `${config.HOST}pcloud-microcourse-webapp/prizeManager/prizeList.html`

// 提交评奖结果
const submitResult = `${config.HOST}pcloud-microcourse-webapp/prizeManager/submitResult.html`

// 发布奖项结果
const publishResult = `${config.HOST}pcloud-microcourse-webapp/prizeManager/publishResult.html`

// 奖项详情
// const toPrizeInfo = `${config.HOST}pcloud-microcourse-webapp/prizeManager/toPrize.html`

// 权限
const userInfo = `${config.HOST}pcloud-microcourse-webapp/base/userInfo.html`

export default {
  prize: {
    // 获奖管理list
    contestList: (paramJson) => {
      return config.axios.post(contestList, qs.stringify(paramJson))
    },
    opusList: (paramJson) => { // 奖项管理作品列表
      return config.axios.post(opusList, qs.stringify(paramJson))
    },
    prizeList: (paramJson) => { // 中奖列表
      return config.axios.post(prizeList, qs.stringify(paramJson))
    },
    prizeNameList: (paramJson) => { // 中奖列表
      return config.axios.post(prizeNameList, qs.stringify(paramJson))
    },
    submitResult: (paramJson) => { // 提交评奖结果
      return config.axios.post(submitResult, paramJson)
    },
    publishResult: (paramJson) => { // 发布奖项结果
      return config.axios.post(publishResult, qs.stringify(paramJson))
    },
    toPrizeInfo: (paramJson) => { // 奖项详情
      return config.axios.post(toPrize, qs.stringify(paramJson))
    }
  },
  user: {
    userInfo: (paramJson) => { // 发布奖项结果
      return config.axios.post(userInfo, qs.stringify(paramJson))
    }
  }
}
