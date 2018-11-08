import React from 'react'
import { Route , Switch } from 'react-router-dom';
import loadable from 'react-loadable'

const MSG = () => <div>加载中</div>
const Page1 = loadable({
    loader: () => import( /* webpackChunkName:'railTransit' */ '../pages/page1/index'),
    loading:MSG
})
const Page2 = loadable({
    loader: () => import( /* webpackChunkName:'railTransit' */ '../pages/page2/index'),
    loading:MSG
})
const Page3 = loadable({
    loader: () => import( /* webpackChunkName:'railTransit' */ '../pages/page3/index'),
    loading:MSG
    
})
// import Page1 from '../pages/page1/index'
// import Page2 from '../pages/page2/index'
// import Page3 from '../pages/page3/index'

const Routers = (
    <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
    </Switch>
)
export default Routers