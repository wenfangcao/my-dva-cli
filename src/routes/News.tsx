import * as React from 'react'
import { connect } from 'dva'
import Home from '@/routes/Home'

interface HomeProps {
  home: Number,
  news: Number,
  dispatch: Function
}

class News extends React.PureComponent<HomeProps, any>{
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

  btnClick(): void {
    this.props.dispatch({type: 'home/add'})
  }

  reClick(str: string | number): void {
    if (str as string) {
      console.log(str)
    }
  }

  render() {
    return (
      <div>
        <div>Hello news</div>
        <div>{this.props.home}</div>
        {/* <input type="text" onChange={e => this.toBool(e.target.value)}/> */}
        <input type="text" defaultValue={this.state.b} onChange={e => this.personal(e.target.value)}/>
        <button onClick={() => this.btnClick()}>++++</button>
        <button onClick={() => this.reClick('as')}>reClick</button>
        <Home />
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
export default connect(mapStateToProps)(News)
