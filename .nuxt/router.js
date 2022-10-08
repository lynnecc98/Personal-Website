import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6766034e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _63a2419b = () => interopDefault(import('../pages/directory.vue' /* webpackChunkName: "pages/directory" */))
const _08c5d5be = () => interopDefault(import('../pages/works/work1.vue' /* webpackChunkName: "pages/works/work1" */))
const _08a9a6bc = () => interopDefault(import('../pages/works/work2.vue' /* webpackChunkName: "pages/works/work2" */))
const _84f2e700 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _6766034e,
    name: "contact"
  }, {
    path: "/directory",
    component: _63a2419b,
    name: "directory"
  }, {
    path: "/works/work1",
    component: _08c5d5be,
    name: "works-work1"
  }, {
    path: "/works/work2",
    component: _08a9a6bc,
    name: "works-work2"
  }, {
    path: "/",
    component: _84f2e700,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
