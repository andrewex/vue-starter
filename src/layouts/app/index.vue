<template>
    <div id="wrap">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app-layout'
    }
</script>

<style>
    #wrap {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>