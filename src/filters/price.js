import Vue from 'vue'

Vue.filter('price', function (number) {
    if (!number) return '$0.00'
    return '$' + (number / 100).toFixed(2)
})