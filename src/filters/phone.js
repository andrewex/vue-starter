import Vue from 'vue'

Vue.filter('phone', function (number) {
    if (!number || number.length !== 10) return ''
    let cleanNumber = number.toString().replace(/\D/g, '');
    let parts = cleanNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!parts) ? null : "(" + parts[1] + ") " + parts[2] + "-" + parts[3];
})