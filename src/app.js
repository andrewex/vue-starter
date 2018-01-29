import Vue from 'vue'
import store from '~/store'
import router from '~/router'

import '~/filters'
import '~/plugins'
import '~/components'

import App from '~/app.vue'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    ...App
})