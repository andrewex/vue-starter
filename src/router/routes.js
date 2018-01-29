export default ({authGuard, guestGuard}) => [

    // Authenticated routes.
    ...authGuard([
        {path: '/', name: 'dashboard', component: require('~/views/dashboard/dashboard.vue')}
    ]),

    // Guest routes.
    ...guestGuard([
        {path: '/login', name: 'login', component: require('~/views/auth/login.vue')},
        {path: '/register', name: 'register', component: require('~/views/auth/register.vue')}
    ]),

    {path: '*', component: require('~/views/errors/404.vue')}
]
