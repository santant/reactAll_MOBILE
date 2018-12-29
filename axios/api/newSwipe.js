import config from '../commonApi'
import qs from 'qs'
// 添加资讯
const addNews = `${config.HOST2}pcloud-microcourse-webapp/information/add.html`
// 资讯列表
const newsList = `${config.HOST2}pcloud-microcourse-webapp/information/pageList.html`

// 资讯详情
const newsViewInfo = `${config.HOST2}pcloud-microcourse-webapp/information/show.html`

// 资讯编辑 （置顶，取消置顶都在这里）
const newsEditStatus = `${config.HOST2}pcloud-microcourse-webapp/information/edit.html`
// 删除资讯
const delectNews = `${config.HOST2}pcloud-microcourse-webapp/information/delete.html`
// 新增轮播
const addSwipe = `${config.HOST2}pcloud-microcourse-webapp/carousel/add.html`
// 轮播列表
const swipeList = `${config.HOST2}pcloud-microcourse-webapp/carousel/pageList.html`

// 轮播编辑
const editSwipe = `${config.HOST2}pcloud-microcourse-webapp/carousel/edit.html`

// 轮播排序
const sortSwipe = `${config.HOST2}pcloud-microcourse-webapp/carousel/changeOrder.html`

// 删除轮播
const deleteSwipe = `${config.HOST2}/pcloud-microcourse-webapp/carousel/delete.html`

const swipeFileUploadUrl = `${config.HOST2}pcloud-microcourse-webapp/carousel/upload.html`
// 资讯轮播
export default {
  new: { // 赛事管理
    addNew: (paramJson) => { // 添加资讯
      return config.axios.post(addNews, paramJson)
    },
    newList: (paramJson) => { // 资讯列表
      return config.axios.post(newsList, qs.stringify(paramJson))
    },
    newsViewInfo: (paramJson) => { // 资讯查看
      return config.axios.post(newsViewInfo, paramJson)
    },
    newsEditStatus: (paramJson) => { // 资讯编辑 （置顶，取消置顶都在这里）
      if (paramJson.content) {
        return config.axios.post(newsEditStatus, paramJson)
      } else {
        return config.axios.post(newsEditStatus, paramJson)
      }
    },
    delectNews: (paramJson) => { // 资讯删除
      return config.axios.post(delectNews, paramJson)
    }
  },
  swipe: { // 轮播
    swipeFileUploadUrl: swipeFileUploadUrl,
    addSwipe: (paramJson) => { // 添加轮播
      return config.axios.post(addSwipe, paramJson)
    },
    swipeList: (paramJson) => { // 轮播列表
      return config.axios.post(swipeList, qs.stringify(paramJson))
    },
    editSwipe: (paramJson) => { // 轮播编辑
      return config.axios.post(editSwipe, paramJson)
    },
    deleteSwipe: (paramJson) => { // 轮播del
      return config.axios.post(deleteSwipe, paramJson)
    },
    sortSwipe: (paramJson) => { // 轮播排序
      return config.axios.post(sortSwipe, paramJson)
    }
  }
}
