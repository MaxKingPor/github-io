<template>
    <div class="container">

        <div>
            <img @click="goto_github()" src="https://avatars.githubusercontent.com/u/43533178?s=400&u=c7b16bb727aa56496093c576c8d90d1606e13117&v=4"
                alt="">
            <span @click="goto_github()">MaxKing</span>
        </div>

    </div>
</template>

<script setup lang="ts">

function goto_github() {
    window.open("https://github.com/MaxKingPor")
}
</script>

<style scoped lang="scss">
.container {
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        img {
            transition: all 2s;
            border-radius: 50% !important;
        }

        img:hover {
            transform: rotate(360deg);
            /*deg为旋转度数*/
        }


        span {
            margin-top: 50px;
            font-size: 50px;
            color: yellowgreen;
        }
    }
}
</style>