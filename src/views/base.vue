<template>
    <div class="container">


        <div class="app-main">
            <router-view />
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-image: url(../assets/bg.jpg);
    background-size: cover;

    .app-main {
        height: 100%;
    }
}
</style>