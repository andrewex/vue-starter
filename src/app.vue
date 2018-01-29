<template>
    <div id="app">
        <vue-progress-bar/>
        <transition name="page" mode="out-in">
            <component v-if="layout" :is="layout"/>
        </transition>
    </div>
</template>

<script>
    const requireContext = require.context('./layouts', true, /.*\.vue$/)

    const layouts = requireContext.keys()
        .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
        .reduce((components, [name, component]) => {
            let key = name.substr(0, name.indexOf('/'))
            components[key] = component
            return components
        }, {})

    export default {
        el: '#app',

        data: () => ({
            layout: null,
            defaultLayout: 'app'
        }),

        methods: {
            setLayout(layout) {
                if (!layout || !layouts[layout]) {
                    layout = this.defaultLayout
                }

                this.layout = layouts[layout]
            }
        }
    }
</script>

<style lang="scss">
    @import './assets/styles/app';
</style>