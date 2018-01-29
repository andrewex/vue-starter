<template>
    <div id="wrap">
        default
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'default-layout'
    }
</script>

<style>
    #wrap {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>