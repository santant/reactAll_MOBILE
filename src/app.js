import React, {Component} from 'react'
import {BrowserRouter, HashRouter, Switch, Router, Route} from 'react-router-dom'
// test1
import Test1 from './view/test1'
// test2
import Test2 from './view/test2'


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div id='app'>
                    {/*<AuthRoute></AuthRoute>*/}
                    <Switch tt={'xx'}>
                        {/*<Route path="/login" component={LoginState}/>*/}
                        <Route path="/login" component={Test1}/>
                        <Route path="/register" component={Test2}/>
                        {/*如果没有path就每个页面都用这个组件，但是用Switch包住就可以上面没匹配到到才走这个路由*/}
                        {/*<Route component={Dashboard}/>*/}
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

// 获得数据
// const mapStateToProps = (state) => {
//     return {num: state}
// }
// // 获得方法,方法是上面倒入的 //将action的所有方法绑定到props上
// const mapDispatchToProps = {addGunAsync, addGUN, delectGUN}
// // connect 第一个是获得数据源，第二个是获得方法源
// App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App