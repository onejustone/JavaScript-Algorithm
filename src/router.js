import Router from './packages/router'

const routes = [
  // 需要使用 syntax-dynamic-import 来解析此语法 import() 语法
  // 同时 .babelrc 也需添加 babel presets stage-2支持
  {
    name: 'home',
    path: '/',
    component: () => import('./views/home')
  },
  {
    name: 'bubblesort',
    path: '/bubblesort',
    component: () => import('./views/bubblesort')
  },
  {
    name: 'foo',
    path: '/foo',
    component: () => import('./views/foo')
  },
  {
    name: 'bar',
    path: '/bar',
    component: () => import('./views/bar')
  }
]

// const routes = {
//   // 需要使用 syntax-dynamic-import 来解析此语法 import() 语法
//   // 同时 .babelrc 也需添加 babel presets stage-2支持
//   '/home': () => import('./views/home'),
//   '/foo': () => import('./views/foo'),
//   '/bar': () => import('./views/bar')
// }

export default new Router({
  routes,
  mode: 'hash'
})