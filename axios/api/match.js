import config from '../commonApi'
import qs from 'qs'
// 优惠卷
const GETCOUPONCHELUE = `http://test2.artup.com/artup-weixin/material/queryMaterials/f44246652c0246b8a8ebee18890dce40?passportId=f44246652c0246b8a8ebee18890dce40&passId=f44246652c0246b8a8ebee18890dce40&clientCode=wechat&channelCode=arton&pageSize=100` // 获取优惠卷策略

// 立即参赛准备信息
const goMatch = `${config.HOST}pcloud-microcourse-webapp/contestInfo/toJoinIn.html`
// 获取教材
const getTextBook = `${config.HOST}pcloud-microcourse-webapp/contestInfo/getTextbook.html`

// 统计获取赛事列表
const MatchList = `${config.HOST}pcloud-microcourse-webapp/statisticsManager/getContest.html`

// 获取章节
const getChapter = `${config.HOST}/pcloud-microcourse-webapp/contestInfo/getChapter.html`

// 上传视频
// const uploadVideo = `${config.HOST}/pcloud-microcourse-webapp/contestInfo/uploadVideo.html`
//  微课上传视频修正和上面上传视频一样只是是线上
const uploadVideo = `${config.HOST}/pcloud-microcourse-webapp/contestInfo/uploadVideoToResource.html`

// 上传作品缩略图
const uploadThumbnail = `${config.HOST}/pcloud-microcourse-webapp/contestInfo/uploadThumbnail.html`

// 作品保存
const workKeep = `${config.HOST}pcloud-microcourse-webapp/opus/add.html`

// 全部参赛作品
// const workList = `${config.HOST}pcloud-microcourse-webapp/contestManager/pageList.html`
const workList = `${config.HOST}pcloud-microcourse-webapp/opus/pageList.html`
// 作品详情
const workInfo = `${config.HOST}pcloud-microcourse-webapp/opus/details.html`

// 学校列表
const getSchool = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/getSchool.html`

// 排行榜列表
const rankingList = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/statisticsBySchool.html`

// 作品年级统计
const statisticsByGrade = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/statisticsByGrade.html`

// 学科作品统计
const statisticsBySubject = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/statisticsBySubject.html`

// 我的作品列表（用户）
const myOpusPageList = `${config.HOST}/pcloud-microcourse-webapp/opus/myOpusPageList.html`

// 我的作品列表（详情）
const myOpusDetails = `${config.HOST}/pcloud-microcourse-webapp/opus/myOpusDetails.html`

const redirectUrl = `http://192.168.10.218:9090/logout?redirectUrl=`

// 审核作品详情
const reviewOpus = `${config.HOST2}/pcloud-microcourse-webapp/reviews/reviewOpus.html`

// 排行榜下载
// 学科作品数统计导出excel下载
const exportBySubject = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/exportBySubject.html`
// 年级作品数统计导出excel
const exportByGrade = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/exportByGrade.html`
// 下载学校作品数排行榜
const exportBySchool = `${config.HOST}/pcloud-microcourse-webapp/statisticsManager/exportBySchool.html`
// 比赛ajax
export default {
  match: { // 毕竟参赛
    // game: (paramJson) => { // 优惠卷策略
    //   return config.axios.get(GETCOUPONCHELUE, {params: Object.assign({}, config.params, paramJson)})
    // },
    uploadVideo: uploadVideo, // 上传视频
    getMatchAttr: (paramJson) => { // 立即参赛准备信息
      return config.axios.post(goMatch, paramJson)
    },
    redirectUrl: (paramJson) => { // 立即参赛准备信息
      return config.axios.get(redirectUrl, paramJson)
    },
    getTextBook: (paramJson) => { // 获取教材
      return config.axios.post(getTextBook, paramJson)
    },
    getChapter: (paramJson) => { // 获取章节
      return config.axios.post(getChapter, paramJson)
    },
    uploadBase64: (paramJson) => { // 上传作品封面base64
      return config.axios.post(uploadThumbnail, qs.stringify(paramJson))
    },
    workKeep: (paramJson) => { // 保存作品
      return config.axios.post(workKeep, paramJson)
    },
    matchList: (paramJson) => { // 赛事列表
      return config.axios.post(MatchList, paramJson)
    }
  },
  ranking: { // 排行榜
    rankingList: (paramJson) => { // 排行榜列表
      return config.axios.post(rankingList, qs.stringify(paramJson))
    },
    statisticsByGrade: (paramJson) => { // 作品年级统计
      return config.axios.post(statisticsByGrade, qs.stringify(paramJson))
    },
    statisticsBySubject: (paramJson) => { // 学科作品统计
      return config.axios.post(statisticsBySubject, qs.stringify(paramJson))
    },
    exportBySubjectUrl: exportBySubject + '?mcId=', // 学科作品数统计导出excel
    exportByGradeUrl: exportByGrade + '?mcId=', // 年级作品数统计导出excel
    exportBySchoolUrl: exportBySchool + '?mcId=',
    exportBySubject: (paramJson) => { // 排行榜列表
      return config.axios.get(exportBySubject + '?mcId=' + paramJson)
    },
    getSchoolList: (paramJson) => { // 排行榜列表
      return config.axios.post(getSchool, paramJson)
    }
  }, // 排行榜
  work: { // 作品
    workList: (paramJson) => { // 全部参数作品
      return config.axios.post(workList, qs.stringify(paramJson))
    },
    workInfo: (paramJson) => { // 作品详情
      return config.axios.post(workInfo, qs.stringify(paramJson))
    },
    reviewOpus: (paramJson) => { // 审核作品详情
      return config.axios.post(reviewOpus, paramJson)
    },
    myOpusPageList: (paramJson) => { // 我的作品列表
      return config.axios.post(myOpusPageList, qs.stringify(paramJson))
    },
    myOpusDetails: (paramJson) => { // 我的作品详情
      return config.axios.post(myOpusDetails, qs.stringify(paramJson))
    }
  }
}
