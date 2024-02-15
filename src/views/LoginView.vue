<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <body>
        <header>
            <img src="./../assets/images/logoConectados.png" alt="Logo">
            <router-link to="/" id="routerlink">Home</router-link>
        </header>
        <main>
            <form action="">
                <h1>LOGIN</h1>
                <div>
                    <label for="username">Username</label>
                    <input type="text">
                    <label for="password">Password</label>
                    <input type="text">
                </div>
                <button>Log in</button>
            </form>
        </main>
    </body>
</template>

<style scoped lang="scss">
    * {
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    body {
        background-image: url(./../assets/images/background-login.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        width: 100vw;
    }
    header {
        height: 15vh;
        display: flex;
        padding: 3em;
        justify-content: space-between;
        align-items: center;

        img {
            height: 25em;
        }

        #routerlink{
            font-size: 3em;
            text-decoration: none;
        }
    }

    form {
        height: 80vh;
        width: 550px;
        background-color: rgba(255, 255, 255, 0.199);
        backdrop-filter: blur(30px);
        padding: 5em;
        border-radius: 5em;
        margin-left: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        h1 {
            font-weight: 500;
            font-size: 4.5em;
        }

        > div {
            background-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            width: 100%;

            label {
                font-size: 3em;
                margin-bottom: 5%;

            }
            input {
                border: none;
                border-radius: 10px;
                width: 100%;
                padding: 1em;
                height: 3vh;
                color: black;
                font-size: 1.5em;
            }
        }
    }
</style>
