import Vue from 'vue'

Vue.filter('percent', function (number) {

    if (number === 0) return '%0'

    console.log('percent', number)

    return '%' + (number / 100).toFixed(2)
})