// 合并所有的reducer 并且返回
import {combineReducers} from 'redux'


import {counter} from './store/index.redux'

export default combineReducers({counter})