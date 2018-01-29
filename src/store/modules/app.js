export const state = {
    sidebarOpen: true,
    infobarOpen: false,
    infobarView: null,
    infobarPayload: false,
    infobarTitle: null
}

export const getters = {
    sidebarOpen: state => state.sidebarOpen,
    infobarOpen: state => state.infobarOpen,
    infobarView: state => state.infobarView,
    infobarPayload: state => state.infobarPayload,
    infobarTitle: state => state.infobarTitle
}

export const mutations = {
    toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
    },

    toggleInfobar(state) {
        state.infobarOpen = !state.infobarOpen
    },

    openInfobar(state) {
        state.infobarOpen = true
    },

    closeInfobar(state) {
        state.infobarOpen = false
    },

    changeInfobarView(state, payload) {
        state.infobarTitle = payload.title
        state.infobarPayload = payload.data
        state.infobarView = payload.view
    }
}

export const actions = {
    toggleSidebar(context) {
        context.commit('toggleSidebar')
    },

    toggleInfobar(context) {
        context.commit('toggleInfobar')
    },

    loadInfobar(context, payload) {
        context.commit('changeInfobarView', payload)
        context.commit('openInfobar')
    },

    closeInfobar(context) {
        context.commit('closeInfobar')
    }
}


