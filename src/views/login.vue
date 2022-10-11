<template>
    <div class="container">
        <div class="login_frome">
            <p class="title">MaxKing</p>

            <div class="user">
                <span>User</span>
                <input v-model="user" placeholder="       User" type="text" maxlength="16" />
            </div>

            <div class="password">
                <span>Password</span>
                <input v-model="password" placeholder="    Password" type="password" maxlength="32" />
            </div>

            <div class="submit" @click="submit"><span>Login</span></div>

        </div>

    </div>
</template>

<script setup lang="ts">


import { ref } from 'vue';
import { login } from "@/js/http/user"

let user = ref<string>("");
let password = ref<string>("");

function submit() {
    login({ user: user.value, password: password.value }).then((resp) => {
        
        resp.data.data.token
        console.log("aAAA");

    })
}


</script>

<style scoped lang="scss">
.container {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/bg.jpg);
    background-size: cover;

    .login_frome {
        user-select: none;
        padding: 30px;

        background-color: rgba(0, 0, 0, 0.3);

        backdrop-filter: blur(2px);
        border-radius: 25px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);


        display: flex;
        justify-content: center;
        flex-direction: column;

        .title {
            color: white;
            text-align: center;
            margin-bottom: 10px;
            font-size: 20px;
        }

        div {

            --height: 35px;

            margin: 10px 0;
            width: 100%;
            height: var(--height);

            display: flex;
            justify-content: center;
            flex-wrap: nowrap;

            span {
                height: var(--height);
                color: white;
                font-size: 16px;
                min-width: 100px;
                width: 25%;
                display: inline-block;
                background-color: blueviolet;
                text-align: center;
                vertical-align: middle;
                line-height: var(--height);
                border-radius: 40px 0px 0px 40px;

            }

            input {
                // margin-left: 6px;
                font-size: 16px;
                display: inline-block;
                width: 75%;
                min-width: 300px;
                border: none;
                outline: none;
                height: var(--height);
                // background: transparent;
                vertical-align: top;
                line-height: var(--height);
                padding-left: 6px;
                border-radius: 0px 40px 40px 0px;
            }
        }


        .submit {
            width: initial;

            span {
                background-color: red;
                border-radius: 40px 40px 40px 40px;
            }
        }

        .submit>span:hover {
            background-color: blue;
        }





    }
}
</style>