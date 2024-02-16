<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

let username = ref("")
let password = ref("")

let uri = import.meta.env.VITE_API_ENDPOINT_LOGIN

async function login(username, password) {

  try {
    let authString = btoa(`${username}:${password}`)
    const response = await fetch(uri + '/login', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + authString
      },
      credentials: 'include'
    });
    const text = await response.json();
    console.log(text);
    redirectToHome()
  } catch (error) {
    alert("Incorrect username or password")
    throw new Error('Error occured during API fetch GET request while login')
  }
}

function redirectToHome() {
  const redirectPath = route.query.redirect || '/'
  router.push(redirectPath)
}

</script>

<template>
    <form @submit.prevent="login(username, password)">
        <h1>LOGIN</h1>
        <div id="inputs">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="username" v-model="username">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="password" v-model="password">
            </div>
        </div>
        <button type="submit">Iniciar Sesión</button>
    </form>
</template>
<style scoped lang="scss">
form {
    background-color: rgba(255, 255, 255, 0.371);
    width: 400px;
    height: 60vh;
    border-radius: 20px;
    backdrop-filter: blur(20px);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
h1 {
    font-size: 4em;
    font-weight: 400;
}
#inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
    height: 50%;
    width: 70%;

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        label {
            font-size: 2em;
            margin-left: 10px;
        }
        input {
            border: none;
            border-radius: 10px;
            height: 30px;
            padding: 10px;
            font-size: 1.5em;
        }
    }
}

button {
    margin: 10% 0px;
    height: 8%;
    width: 70%;
    border-radius: 50px;
    background-color: #F4A58B;
    border: none;
    color: white;
    font-size: 2em;
}

</style>