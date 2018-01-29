import Vue from 'vue'

Vue.filter('number', function (number) {
    if (!number) return ''
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})