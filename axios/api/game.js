import config from '../commonApi'
import qs from 'qs'
// 优惠卷
const GETCOUPONCHELUE = `http://test2.artup.com/artup-weixin/material/queryMaterials/f44246652c0246b8a8ebee18890dce40?passportId=f44246652c0246b8a8ebee18890dce40&passId=f44246652c0246b8a8ebee18890dce40&clientCode=wechat&channelCode=arton&pageSize=100` // 获取优惠卷策略
// 赛事新增属性
const addGameAttrList = `${config.HOST}pcloud-microcourse-webapp/contestManager/toAdd.html`
// 新增赛事儿保存接口
const EditGameList = `${config.HOST}pcloud-microcourse-webapp/contestManager/add.html`
// 编辑赛事
const modifyGame = `${config.HOST}pcloud-microcourse-webapp/contestManager/edit.html`
// 上传附件
const gameFileUploadUrl = `${config.HOST}pcloud-microcourse-webapp/contestManager/upload.html`

// 上传base64图片
const uploadBase64 = `${config.HOST}pcloud-microcourse-webapp/contestManager/uploadPic.html`
// 赛事管理表格数据
const GameList = `${config.HOST}/pcloud-microcourse-webapp/contestManager/pageList.html`
// 赛事详情
const GameViewInfo = `${config.HOST}/pcloud-microcourse-webapp/contestManager/toEdit.html`
// 赛事置顶
const StickyPost = `${config.HOST}/pcloud-microcourse-webapp/contestManager/stickyPost.html`

// 撤回
const StickyRecall = `${config.HOST}pcloud-microcourse-webapp/contestManager/recall.html`

// 取消赛事置顶
const UnStickyPost = `${config.HOST}/pcloud-microcourse-webapp/contestManager/unStickyPost.html`

// 获取评审员列表
const getReviewer = `${config.HOST}/pcloud-microcourse-webapp/taskManager/getRater.html`

// 编辑赛事接口
const editMatch = `${config.HOST}pcloud-microcourse-webapp/taskManager/edit.html`

// 发布赛事接口
const releaseMatch = `${config.HOST}pcloud-microcourse-webapp/taskManager/publish.html`

// 最新赛事和赛事信息（前台专用）
const newGame = `${config.HOST}pcloud-microcourse-webapp/contestManager/pageListForFG.html`

// 礼品卡列表
export default {
  game: { // 赛事管理
    // game: (paramJson) => { // 优惠卷策略
    //   return config.axios.get(GETCOUPONCHELUE, {params: Object.assign({}, config.params, paramJson)})
    // },
    gameFileUpload: gameFileUploadUrl,
    uploadBase64: (paramJson) => { // 赛事管理值list
      return config.axios.post(uploadBase64, qs.stringify(paramJson))
    },
    addGameAttrList: (paramJson) => { // 赛事管理值list
      return config.axios.post(addGameAttrList, qs.stringify(paramJson))
    },
    editGameList: (paramJson) => { // 保存赛事
      return config.axios.post(EditGameList, paramJson)
    },
    modifyGame: (paramJson) => { // 保存赛事
      return config.axios.post(modifyGame, paramJson)
    },
    gameList: (paramJson) => { // 赛事管理表格数据
      return config.axios.post(GameList, qs.stringify(paramJson))
    },
    stickyPost: (paramJson) => { // 赛事置顶
      return config.axios.post(StickyPost, paramJson)
    },
    unStickyPost: (paramJson) => { // 取消赛事置顶
      return config.axios.post(UnStickyPost, paramJson)
    },
    gameViewInfo: (paramJson) => { // 赛事详情
      return config.axios.post(GameViewInfo, qs.stringify(paramJson))
    },
    editMatch: (paramJson) => { // 编辑赛事
      return config.axios.post(editMatch, paramJson)
    },
    getReviewer: (paramJson) => { // 获取评审列表
      return config.axios.post(getReviewer, qs.stringify(paramJson))
    },
    releaseMatch: (paramJson) => { // 发布赛事接口
      return config.axios.post(releaseMatch, paramJson)
    },
    newGameList: (paramJson) => { // 最新赛事和赛事信息（前台专用）
      return config.axios.post(newGame, qs.stringify(paramJson))
    },
    StickyRecall: (paramJson) => { // 赛事撤回
      return config.axios.post(StickyRecall, qs.stringify(paramJson))
    }
  }
}
