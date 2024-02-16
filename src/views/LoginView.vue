<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <body>
        <main>
            <form action="">
              <div id="form">
                <h1>LOGIN</h1>
                <div id="inputs">
                  <div>
                    <label for="username">Username</label>
                    <input type="text">
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <input type="text">
                  </div>
                </div>
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

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    form {
      background-color: rgba(255, 255, 255, 0.442);
      width: 80vw;
      height: auto;
      padding: 3rem;
      border-radius: 20px;
      backdrop-filter: blur(20px);

      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        margin-top: 5em;
        background-color: aqua;
        padding: 4px;
        
      }

      #form {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-weight: 400;
        }
        > div {
          gap: 30px;

          > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;

              > div {
                gap: 10px;

                label {
                  align-self: baseline;
                }
  
                input {
                  color: black;
                  border-radius: 10px;
                  border: none;
                  padding: 4px;
                  width: 100%;
                }
              }
          }
        }
      }
    }
</style>
