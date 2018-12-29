import React, {Component} from 'react'
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addGum, addGumAsync} from "../redux/store/index.redux";
@connect(
    state=>({counter: state.counter}),
    {
        addGum,addGumAsync
    }
)
class Test1 extends Component {
    render() {
        console.log(this.props)
        let num = this.props.counter
        return (
            <div className="test01">
                <p>{num}</p>
                <Button onClick={this.props.addGum}>add</Button>
                <Button onClick={this.props.addGumAsync}>延迟增加</Button>
                <Link to='/register'>xx</Link>
            </div>
        )
    }
}
export default Test1


// // 获得数据
// const mapStateToProps = (state) => {
//     return {num: state}
// }
// // 获得方法,方法是上面倒入的 //将action的所有方法绑定到props上
// const mapDispatchToProps = {addGum, addGumAsync}
// // connect 第一个是获得数据源，第二个是获得方法源
// Test1 = connect(mapStateToProps, mapDispatchToProps)(Test1)