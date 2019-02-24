import * as React from 'react'
import { connect } from 'dva'


interface HomeProps {
  home: Number,
  news: Number,
  dispatch: Object
}

class Home extends React.PureComponent<HomeProps, any>{
  constructor(props) {
    super(props)
    this.state = {
     a: '',
     b: '',
    }
  }

  componentDidMount() {
    enum Color {Red, Green, Blue}
    console.log(Color)
    console.log(Color.Blue)
  }
  toBool(a: string): string {
    return a
  }

  personal(b: string): void {
    console.log(b)
  }

  render() {
    return (
      <div>
        <div>Hello home</div>
        {/* <input type="text" onChange={e => this.toBool(e.target.value)}/> */}
        <input type="text" defaultValue={this.state.b} onChange={e => this.personal(e.target.value)}/>
        {/* <button onClick={() => this.props.dispatch({type: 'home/add'})}>+++</button> */}
      </div>
    )
  }
}

const mapStateToProps = ({home, news}) => {
  return {
    home,
    news
  }
}
export default connect(mapStateToProps)(Home)
