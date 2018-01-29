import Vue from 'vue'
import store from '~/store'
import routes from './routes'
import Router from 'vue-router'
import {sync} from 'vuex-router-sync'

Vue.use(Router)

const router = make(
    routes({authGuard, guestGuard})
)

sync(store, router)

export default router

/**
 * Create a new router instance.
 *
 * @param  {Array} routes
 * @return {Router}
 */
function make(routes) {
    const router = new Router({
        routes,
        mode: 'history'
    })

    // Register before guard.
    router.beforeEach(async (to, from, next) => {
        setLayout(router, to)
        next()
    })

    // Register after hook.
    router.afterEach((to, from) => {
        router.app.$nextTick(() => {
            router.app.$Progress.finish()
        })
    })

    return router
}

/**
 * Set the application layout from the matched page component.
 *
 * @param {Router} router
 * @param {Route} to
 */
function setLayout(router, to) {
    // Get the first matched component.
    const [component] = router.getMatchedComponents({...to})

    if (component) {
        router.app.$nextTick(() => {
            // Start the page loading bar.
            if (component.loading !== false) {
                router.app.$Progress.start()
            }

            // Set application layout.
            router.app.setLayout(component.layout || '')
        })
    }
}

/**
 * Redirect to login if guest.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function authGuard(routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (!store.getters.authCheck) {
            next({name: 'login'})
        } else {
            next()
        }
    })
}

/**
 * Redirect home if authenticated.
 *
 * @param  {Array} routes
 * @return {Array}
 */
function guestGuard(routes) {
    return beforeEnter(routes, (to, from, next) => {
        if (store.getters.authCheck) {
            next({name: 'builder'})
        } else {
            next()
        }
    })
}

/**
 * Apply beforeEnter guard to the routes.
 *
 * @param  {Array} routes
 * @param  {Function} beforeEnter
 * @return {Array}
 */
function beforeEnter(routes, beforeEnter) {
    return routes.map(route => {
        return {...route, beforeEnter}
    })
}