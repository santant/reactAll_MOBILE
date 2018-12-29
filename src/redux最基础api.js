import {createStore} from 'redux'

// 新建store
// 根据老的state和action 生成新的state

function counter(state = 0, action) {
    switch (action.type) {
        case '加激光枪':
            return state + 1
        case '减激光枪':
            return state - 1
        default:
            return 10
    }
}

// 新建store
const store = createStore(counter)

const init = store.getState()

function listener() {
    const current = store.getState()
    console.log(current)
}

// 监听订阅函数
store.subscribe(listener)
// 派发事件
store.dispatch({type: '加激光枪'})
store.dispatch({type: '加激光枪'})
store.dispatch({type: '加激光枪'})
