import dva from 'dva'
import createhistory from 'history/createBrowserHistory'

const app = dva({
  history: createhistory(),
})

app.model(require('./models/home').default);

app.router( require('./router').default )

app.start('#root')
