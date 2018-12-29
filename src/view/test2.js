import React, {Component} from 'react'
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addDel, addDelAsync} from "../redux/store/index.redux";
@connect(
    state=>({counter: state}),
    {
        addDel,addDelAsync
    }
)
class Test2 extends Component {
    render() {
        let num = this.props.counter.counter
        return (
            <div className="test02">
                <p>{num}</p>
                <Button onClick={this.props.addDel}>del</Button>
                <Button onClick={this.props.addDelAsync}>延迟del</Button>
                <Link to='/login'>login</Link>
            </div>
        )
    }
}
export default Test2