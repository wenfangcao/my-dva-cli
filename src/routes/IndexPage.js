import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import { routerRedux } from 'dva/router'
import axios from '@/plugins/http.js'

class Login extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      uname: '1',
      upwd: '2'
    }
  }

  login() {
    console.log(this.props)
    this.props.history 
    ? this.props.history.push('/')
    : this.props.dispatch(routerRedux.push({
        pathname: '/Index'
      }))
  }

  axios() {
    
    axios('/sss')
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="请输入帐号" defaultValue={this.state.uname} onChange={e => this.setState({uname: e.target.value})}/>
        <input type="text" placeholder="请输入密码" defaultValue={this.state.upwd} onChange={e => this.setState({upwd: e.target.value})}/>
        <button onClick={() => this.login()}>login</button>
        <button onClick={() => this.axios()}>axios</button>
      </div>
    )
  }
}

const mapStateToProps = ({count, second}) => {
  return {
    count,
    second
  }
}
export default connect(mapStateToProps)(Login);
